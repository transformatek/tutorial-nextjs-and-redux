'use client'
import { Select, Space } from 'antd'
import { useChangeLocale, useCurrentLocale } from '../../../../locales/client'
import { locales } from '@/config'

export default function LanguageSwitcher() {
    const changeLocale = useChangeLocale()
    const locale = useCurrentLocale()
    const handleChange = (value: any) => {
        changeLocale(value)
      };
    return (
        <>
            <Space wrap>
                <Select
                    defaultValue={locale}
                    style={{ width: 120 }}
                    onChange={handleChange}
                    options= {locales.map((loc) => ({ value: loc, label: loc }))}
                />
            </Space>
        </>
    )
}