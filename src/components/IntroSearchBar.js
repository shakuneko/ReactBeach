import { Input } from "antd"
import { SearchOutlined } from '@ant-design/icons';

export default function IntroSearchBar() {
    return (
        <Input size="large" placeholder="search" prefix={<SearchOutlined />} />
    );
}