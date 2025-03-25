import { computeHeadingLevel } from '@testing-library/dom';
import React, { useState } from 'react';
import './App.css';

function App() {
  // 將 users 轉為 React state，使其可以更新
  const [users, setUsers] = useState([
    { Name: 'John Doe', account: 'john_doe', password: 'password123' },
    { Name: 'Jane Smith', account: 'jane_smith', password: 'password456' },
    { Name: 'Admin', account: 'admin', password: 'admin123' }
  ]);

  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [currentUser, setCurrentUser] = useState(null); // 用來存儲當前登入的使用者

  // 處理登入
  const handleLogin = (e) => {
    e.preventDefault();

    // 根據帳號和密碼進行比對
    const user = users.find((user) => user.account === account && user.password === password);

    if (user) {
      setMessage(`登入成功，歡迎 ${user.Name}`);
      setCurrentUser(user); // 設定當前登入的使用者
    } else {
      setMessage('登入失敗，請檢查帳號和密碼');
    }
  };

  // 處理登出
  const handleLogout = () => {
    setMessage('');
    setCurrentUser(null); // 登出，清除當前用戶資料
  };

  // 處理更新資料
  const handleUpdate = (newName, newPassword) => {
    if (currentUser) {
      console.log(currentUser);
      // 更新當前用戶的資料
      const updatedUser = { ...currentUser, Name: newName, password: newPassword };
      
      // 更新 users 陣列中的對應使用者資料
      const updatedUsers = users.map(user => 
        user.account === currentUser.account ? updatedUser : user
      );
    

      // 更新 state 中的 users 資料
      setUsers(updatedUsers);
      setCurrentUser(updatedUser); // 更新當前使用者資料
      setMessage(`資料更新成功！`);
      console.log(updatedUser);
    }
  };

  // 刪除使用者
  const handleDelete = () => {
    if (currentUser) {
      // 刪除當前用戶
      const updatedUsers = users.filter(user => user.account !== currentUser.account);

      // 清除登入資料
      setUsers(updatedUsers); // 更新 users 資料
      setCurrentUser(null); // 登出
      setMessage('使用者已被刪除');
    }
  };

  return (
    
    <div className="App">
      {/* 顯示 users 陣列資料 */}
      <h3>目前的 Users 資料</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Account</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.Name}</td>
              <td>{user.account}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>登入頁面</h2>
      {!currentUser ? (
        // 如果沒有登入的用戶，顯示登入表單
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="account">帳號：</label>
            <input
              type="text"
              id="account"
              value={account}
              onChange={(e) => setAccount(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">密碼：</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">登入</button>
        </form>
      ) : (
        // 如果已經登入，顯示用戶的資訊和操作選項
        <div>
          <h3>當前使用者：{currentUser.Name}</h3>
          <button onClick={handleLogout}>登出</button>
          <div>
            <h4>修改用戶資訊</h4>
            <label htmlFor="newName">新名稱：</label>
            <input
              type="text"
              id="newName"
              placeholder="新名稱"
              onChange={(e) => setAccount(e.target.value)} // 用來改變名稱
            />
            <label htmlFor="newPassword">新密碼：</label>
            <input
              type="password"
              id="newPassword"
              placeholder="新密碼"
              onChange={(e) => setPassword(e.target.value)} // 用來改變密碼
            />
            <button onClick={() => handleUpdate(account, password)}>更新</button>
          </div>
          <button onClick={handleDelete}>刪除帳號</button>
        </div>
      )}
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
