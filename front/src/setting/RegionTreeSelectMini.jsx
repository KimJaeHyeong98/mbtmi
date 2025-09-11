// RegionTreeSelectMini.jsx
import React, { useState, useMemo, useEffect } from "react";
import styled from "styled-components";

export const REGION_GROUPS = {
  특별시: ["서울특별시"],
  광역시: ["부산광역시","대구광역시","인천광역시","광주광역시","대전광역시","울산광역시"],
  도: ["경기도","충청북도","충청남도","전라북도","전라남도","경상북도","경상남도","강원도"],
  특별자치도: ["제주특별자치도"],
};

const RegionTreeSelectMini = ({ value, onChange }) => {
  const allGroups = useMemo(() => Object.keys(REGION_GROUPS), []);
  const [expanded, setExpanded] = useState(new Set(allGroups));
  const [selected, setSelected] = useState(value ?? "");

  useEffect(() => {
    if (value !== undefined) setSelected(value ?? "");
  }, [value]);

  const handleSelect = (name) => {
    setSelected(name);
    onChange?.(name);
  };

  return (
    <Panel role="listbox" aria-label="지역 선택">
      {Object.entries(REGION_GROUPS).map(([group, items]) => (
        <Group key={group}>
          <GroupHeader onClick={() => {
            setExpanded((prev) => {
              const next = new Set(prev);
              next.has(group) ? next.delete(group) : next.add(group);
              return next;
            });
          }}>
            <Chevron $open={expanded.has(group)} />
            <GroupTitle>{group}</GroupTitle>
          </GroupHeader>
          {expanded.has(group) && (
            <ItemList>
              {items.map((name) => (
                <Item
                  key={name}
                  $active={selected === name}
                  onClick={() => handleSelect(name)}
                >
                  <Dot>{selected === name ? "●" : "○"}</Dot>
                  <span>{name}</span>
                </Item>
              ))}
            </ItemList>
          )}
        </Group>
      ))}
    </Panel>
  );
};

export default RegionTreeSelectMini;

/* ===== 스타일 ===== */
const Panel = styled.div`
  width: 360px;
  max-width: 92vw;
  border-radius: 16px;
  background: #fff;
  color: #000;
  box-shadow: 0 14px 38px rgba(0,0,0,0.18);
  overflow: hidden;
`;

const Group = styled.div`
  border-bottom: 1px solid #eee;
  &:last-child { border-bottom: 0; }
`;

const GroupHeader = styled.button`
  width: 100%;
  background: #fafafa;
  border: 0;
  padding: 12px 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const GroupTitle = styled.span`
  font-weight: 700;
`;

const Chevron = styled.span`
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 6px solid #666;
  transform: rotate(${p => p.$open ? "90deg" : "0deg"});
  transition: transform 0.15s ease;
`;

const ItemList = styled.ul`
  list-style: none;
  margin: 6px 0 10px 24px;
  padding: 0 12px 6px 0;
`;

const Item = styled.li`
  padding: 8px 6px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  background: ${p => p.$active ? "rgba(166,193,238,.22)" : "transparent"};
  &:hover {
    background: rgba(166,193,238,.12);
  }
`;

const Dot = styled.span`
  width: 16px;
  text-align: center;
  color: #6b90d9;
`;
