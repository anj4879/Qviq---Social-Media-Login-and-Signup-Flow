

import { Form, Input, Button, Row, Card } from "antd";
import axios from "axios"
import InteractiveImage from "./InteractiveImg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const [form] = Form.useForm();
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/")
  }

  const handleFinish = async (values : any ) => {
    
    try{
        setLoading(true)
      const response =  await axios.post("http://localhost:8080/register",values)
      const data = response.data
      console.log(data)  
      if(response.status === 200){
        navigate("/")
      }
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
      <Form form={form} onFinish={handleFinish} layout="vertical" >
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, type: "email" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="name"
          label="Your Name"
          rules={[{ required: true, type: "string" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phoneNo"
          label="Phone No."
          rules={[{ required: true, type: "string" }]}
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
          <Button   type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
       <p>Alredy have a account ? <Button onClick={handleClick}>click here</Button></p>
    </Card>
    </Row>
  );
};

export default Register;
