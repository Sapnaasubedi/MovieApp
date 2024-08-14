import { Input } from 'antd';
const { Search } = Input;
function App() {
  const onSearch = (value, _e, info) => console.log(info?.source, value);

  return (
    <div className="App">
       <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
    </div>
  );
}

export default App;
