import React from 'react';
import "./css_styled/App.css";
import { Form, Input, Button, DatePicker, Select, Checkbox, Row, Col } from 'antd';
const { TextArea } = Input;
const { RangePicker } = DatePicker;

function LeaveRequest() {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };
    
    var today = new Date();
    today = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    return (
    <div>
        <Form
            layout="vertical"
            onFinish={onFinish}
            style={{ width: '800px', margin: '20px auto', padding: '20px', border: '1px solid #bbb', backgroundColor: '#B2D1FF' }}
        >
        <div style={{display:'flex', justifyContent:"flex-end"}}>申請日期: {today}</div>
        
        <Row gutter={16}>
            <Col span={12}>
            <Form.Item
                label="申請人"
                name="applicant"
                rules={[{ required: true, message: '請輸入申請人姓名' }]}
            >
                <Input />
            </Form.Item>
            </Col>
            <Col span={12}>
            <Form.Item
                label="申請部門"
                name="applicationDepartment"
                rules={[{ required: true, message: '請輸入申請部門' }]}
            >
                <Input />
            </Form.Item>
            </Col>
        </Row>

        <Row gutter={16}>
            <Col span={12}>
            <Form.Item label="代理人" name="agent">
                <Input />
            </Form.Item>
            </Col>
            <Col span={12}>
            <Form.Item label="代理人部門" name="agentDepartment">
                <Input />
            </Form.Item>
            </Col>
        </Row>

        <Form.Item
            label="請假事由"
            name="leaveReason"
            // rules={[{ required: true, message: '請輸入請假事由' }]}
        >
            <TextArea rows={3} />
        </Form.Item>

        <Form.Item label="請假類型" name="leaveType" rules={[{ required: true, message: '請選擇請假類型' }]}>
            <Checkbox.Group>
            <Row>
                <Col span={8}><Checkbox value="annual">特休假</Checkbox></Col>
                <Col span={8}><Checkbox value="compensatory">補休假</Checkbox></Col>
                <Col span={8}><Checkbox value="public">公假</Checkbox></Col>
                <Col span={8}><Checkbox value="personal">事假</Checkbox></Col>
                <Col span={8}><Checkbox value="sick">病假</Checkbox></Col>
                <Col span={8}><Checkbox value="funeral">喪假</Checkbox></Col>
                <Col span={8}><Checkbox value="wedding">婚假</Checkbox></Col>
                <Col span={8}><Checkbox value="maternity">產假</Checkbox></Col>
                <Col span={8}><Checkbox value="menstrual">生理假</Checkbox></Col>
                <Col span={8}><Checkbox value="other">其他</Checkbox></Col>
            </Row>
            </Checkbox.Group>
        </Form.Item>

        <Row gutter={16}>
            <Col span={12}>
            <Form.Item
                label="請假日期"
                name="leaveDate"
                rules={[{ required: true, message: '請輸入請假日期' }]}
            >
                <Input />
            </Form.Item>
            </Col>
            <Col span={12}>
            <Form.Item
                label="請假天數"
                name="leaveDays"
                rules={[{ required: true, message: '請輸入請假天數' }]}
            >
                <Input />
            </Form.Item>
            </Col>
        </Row>
        {/* <Form.Item label="開始日期和結束日期" name="dateRange" rules={[{ required: true, message: '請選擇開始和結束日期' }]}>
            <RangePicker showTime format="YYYY-MM-DD HH:mm" />
        </Form.Item> */}

        <Form.Item label="備註" name="remarks">
            <TextArea rows={3} />
        </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType="submit">
                提交
            </Button>
        </Form.Item>
        </Form>

    </div>
  );
}

export default LeaveRequest;