import { Layout, Card, Statistic, List, Typography, Tag } from 'antd'
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons'
import { useContext } from 'react'

import CryptoContext from '../../context/crypto-context';
import { capitalize } from '../../utils'

const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#1677ff',
};

export default function AppSlider () {
    const { assets} = useContext(CryptoContext)

    return (
        <Layout.Sider width="25%" style={siderStyle}>
            {assets.map((asset) => (
                <Card key={asset.id} style= {{ marginBottom: '1rem' }}>
                    <Statistic
                        title={capitalize(asset.id)}
                        value={asset.totalAmount}
                        precision={2}
                        valueStyle={{ color: asset.grow ? '#3f8600':'#cf1322' }}
                        prefix={asset.grow ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
                        suffix="$"
                    />
                    <List
                    bordered
                    dataSource={[
                        {title: 'Title', value: asset.totalProfit, withTag: true},
                        {title: 'Asset amount', value: asset.amount, isPlain:true },
                        //{title: 'Difference', value: asset.growPercent},
                    ]}
                    renderItem={(item) => (
                        <List.Item>
                            <span>{item.title}</span>
                            <span>
                                {item.withTag && (
                                    <Tag color={asset.grow ? 'green': 'red'}>{asset.growPercent}%</Tag>
                                )}
                                {item.isPlain && <span>{item.value}</span>}
                                {!item.isPlain && (
                                <Typography.Text type={asset.grow ? "success": "danger"}>{item.value.toFixed(2)}$</Typography.Text>
                                )}
                            </span>
                        </List.Item>
                    )}
                    />
                </Card>
            ))}
        </Layout.Sider>
    )
}