"use client"

import { LayoutGroup } from "motion/react"
import * as motion from "motion/react-client"
import { useState } from "react"

/**
 * ========== Types ==========
 */

export type TabItem = {
    id: string
    label: string
    isSelected: boolean
}

type TabProps = {
    label: string
    isSelected: boolean
    onClick: () => void
}

type TabRowProps = {
    id: string
    items: TabItem[]
}

/**
 * ========== Components ==========
 */

function Tab({ label, isSelected, onClick }: TabProps) {
    return (
        <li
            onClick={onClick}
            style={{
                position: "relative",
    flex: 1,         // mỗi tab bằng nhau
    textAlign: "center",
    padding: "8px 0",
    cursor: "pointer",
            }}
        >
            {label}

            {isSelected && (
                <motion.div
                    layoutId="underline"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: 2,
                        background: "white",
                    }}
                />
            )}
        </li>
    )
}

export default function TabRow({ items }: TabRowProps) {
    const [tabs, setTabs] = useState<TabItem[]>(items)

    const handleSelect = (selectedId: string) => {
        setTabs((prev) =>
          prev.map((tab) =>
            tab.id === selectedId
              ? { ...tab, isSelected: true }
              : tab.isSelected
              ? { ...tab, isSelected: false }
              : tab // giữ nguyên reference
          )
        )
      }

    return (
        <LayoutGroup>
            <ul
                style={{
                    display: "flex",
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    position: "relative",
                }}
            >
                {tabs.map((item) => (
                    <Tab
                        key={item.id}
                        label={item.label}
                        isSelected={item.isSelected}
                        onClick={() => handleSelect(item.id)}
                    />
                ))}
            </ul>
        </LayoutGroup>
    )
}