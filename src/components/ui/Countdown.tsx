"use client";
import React from "react";
import type { CountdownProps } from "antd";
import { Col, Row, Statistic } from "antd";

const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 20 * 20 * 24 * 2 + 1000 * 30;
const onFinish: CountdownProps["onFinish"] = () => {};

const CoundownTimer = () => (
  <div>
    <Row gutter={16}>
      <Col span={12}>
        <Countdown
          className="lg:text-2xl text-xl"
          value={deadline}
          onFinish={onFinish}
        />
      </Col>
    </Row>
  </div>
);

export default CoundownTimer;
