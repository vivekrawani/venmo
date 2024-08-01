"use client";
// import { signIn, signOut } from "next-auth/react";
interface InputProp {
  onClick: () => void;
}
import { signIn, signOut } from "next-auth/react";
export const Appbar = () => {
  return (
    <div>
      {/* <button>Signin</button> */}
      <button onClick={() => signIn()}>Sign out</button>
    </div>
  );
};
