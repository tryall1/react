import { Layout, Select, Space, Button, Modal, Flex, Drawer } from 'antd';
import { useCrypto } from '../../context/crypto-context';
import { useEffect, useState } from 'react';
import CoinInfoModal from '../CoinInfoModal'
import AddAssetForm from '../addAssetForm';


const headerStyle = {
    textAlign: 'center',
    height: 60,
    padding: '1rem',
    display:'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
};

export default function AppHeader () {
    const [select, setSelect] = useState(false)
    const [modal, setModal] = useState(false)
    const [drawer, setDrawer] = useState(false)
    const [coin, setCoin] = useState(null)
    const {crypto}  = useCrypto()

    function handleSelect(value) {
        console.log(value)
        setCoin(crypto.find((c) => c.id === value))
        setModal(true)
    }

    useEffect(() => {
        const keypress=event => {
            if(event.key==='/') {
                setSelect((prev) => !prev)
            }
        }
        document.addEventListener('keypress', keypress)
        return () => document.removeEventListener('keypress', keypress )
    }, [])

    return (
        <Layout.Header style={headerStyle}>
            <Select
                style={{
                width: '250',
                }}
                open={select}
                value="Press / to open"
                placeholder="select one country"
                defaultValue={['china']}
                onSelect={handleSelect}
                onClick={() => setSelect((prev) => !prev)}
                options={crypto.map(coin => ({
                    label: coin.name,
                    value: coin.id,
                    icon: coin.icon 
                }))}
                optionRender={(option) => (
                <Space>
                    <img style={{width:20}} src={option.data.icon} alt={option.data.label}/> {option.data.label}
                </Space>
                )}
            />
            <Button type="primary" onClick={() => setDrawer(true)}>Primary Button</Button>

            <Modal open={modal} footer={null} onCancel={() => setModal(false)}>
                <CoinInfoModal coin={coin} />
            </Modal>

            <Drawer title="Basic Drawer" width={600} onClose={() => setDrawer(false)} open={drawer} destroyOnClose>
                <AddAssetForm onClose={() => setDrawer(false)}/>  
            </Drawer>

            
        </Layout.Header>

    )
}