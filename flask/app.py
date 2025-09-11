from flask import Flask,request, jsonify
from flask_socketio import SocketIO, emit, join_room
from flask_cors import CORS
from pymongo import MongoClient
from datetime import datetime
from bson import ObjectId


app = Flask(__name__)
CORS(app, supports_credentials=True)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, cors_allowed_origins="*", logger=True, engineio_logger=True)

# MongoDB 연결
client = MongoClient(
    "mongodb+srv://milolee1605_db_user:2La0F7Ph1HMHBcWv@cluster0.5exufe9.mongodb.net/chat_app?retryWrites=true&w=majority"
)
db = client["chat_db"]               # DB 이름
messages_collection = db["mbtmi_messages"] # Collection 이름

@socketio.on("join_room")
def handle_join(data):
    room = data["roomId"]
    join_room(room)
    print(f"{data['userId']} joined room {room}")


@app.route("/chat/history/<room_id>")
def chat_history(room_id):
    # MongoDB Cursor -> 리스트 변환, ObjectId -> str
    messages = list(messages_collection.find({"roomId": room_id}))  # 특정 방만 조회
    for msg in messages:
        msg["_id"] = str(msg["_id"])  # ObjectId -> str 변환

    return jsonify({"messages": messages})

@socketio.on("message")
def handle_message(msg):
    # msg = {"room": room_id, "sender": sender, "text": text}
    msg["date"] = datetime.now().isoformat()
    room = msg["roomId"]
    print(f"Received: {msg}")
    # DB 저장 가능
    message_doc = {
        "roomId": msg.get("roomId"),
        "sender": msg.get("sender"),
        "receiver": msg.get("receiver"),
        "text": msg.get("text"),
        "date": msg.get("date")
    }
    messages_collection.insert_one(message_doc)
    emit("message", msg, room=room)




if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5900)