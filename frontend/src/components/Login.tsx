

import { Form, Input, Button, Row, Card } from "antd";
import axios from "axios"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseconig";
import InteractiveImage from "./InteractiveImg";





const Login = () => {
  const [form] = Form.useForm();

  const [loading , setLoading] = useState(false)

  const navigate = useNavigate()

  const handleGoogle = async () =>{
    try{
        const res = await SignInWithGoogle()
        const user = res.user;
        const {email , phoneNumber ,photoURL , displayName } = user
        const response =  await axios.post("http://localhost:8080/qr-code",{email ,phoneNumber , photoURL , displayName})
        const data = response.data
        navigate("/qrcode",{state: { qrCodeUrl: data.QRCode }});
    }catch(err){
        console.log(err)
    }finally{

    }
}

const SignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth,provider)
    return result
}

  const handleFinish = async (values : any ) => {
    
    try{
      setLoading(true)
      const response =  await axios.post("http://localhost:8080/login",values)
      const data = response.data
      navigate("/qrcode",{state: { qrCodeUrl: data.QRCode }});
    }catch(err){
        console.log(err)
    }finally{
        setLoading(false)
    }
  };

  return (
    <Row style={{width:"100vw" , display:"flex" , justifyContent:"center" ,alignItems:"center" }} justify={"center"} align={"middle"}>
        <Card><InteractiveImage></InteractiveImage></Card>
      <Card  style={{ marginLeft:"5vw",width:"50vw"}} loading={loading} >
      <Form form={form} onFinish={handleFinish}  layout="vertical" >
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, type: "email" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, min: 6 }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item labelAlign="right">
          <Button type="primary" htmlType="submit">
            Sign Up
          </Button>
          
        </Form.Item>
      </Form>
      <Button onClick={handleGoogle} type="primary" htmlType="submit">
            Sign In With google
          </Button>
      </Card>

    </Row>
  );
};

export default Login;
