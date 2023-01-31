// グローバルなコンテキスト使用するためのインポート
import React, { createContext, useState } from "react";

// 他の画面でコンテキストを使用する際に必要
export const UserContext = createContext({});

// createContext内のProviderを使用することで囲った中で渡した値を使用することができる
// ほぼ決まった記載方法
export const UserProvider = (props) => {
  // プロバイダーは要素を囲う必要あり、どの要素でも対応可能な{children}記載が一般的
  const { children } = props;

  const [userInfo, setUserInfo] = useState(null);

  return (
    // グローバルに参照できる値はvalueに記載
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

// コンテキストの参照ファイルではuseContextをインポート
// グローバルなコンテキストを使用すればバケツリレーのような複数ファイルにまたぐstateの受け渡しがなくなる
// ■■■がバケツリレーの部分
// ※グローバルコンテキスト使用する場合、コンテキストの更新があると関連部分の際レンダリングが走るのでmemoを使用してレンダリングしないようにする
