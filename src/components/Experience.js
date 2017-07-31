import React from 'react'

const Experience  = () => {

  const e1 = [
    "Wireless Enterprise Access Point Lab.",
    "IoT Hub Access Point development (WiFi + BT + ZigBee)",
    "Developed BT/ZigBee lamp control module using UART",
    "Access Point automation test development using LUA scripts",
    "Developed communication module with Wifi Tag for Location Based System",
  ]
  const e2 = [
    "System Software Development in Samsung Galaxy Android Team",
    "Sensor driver/HAL development",
    "SD/MMC, audio driver development (Wolfson/Qualcomm/Yamaha)",
    "Based on Qualcomm / Samsung System LSI / Intel DSP",
  ]
  const e3 = [
    "Software Quality Assurance Team",
    "Quality assurance and automation test",
    "Led the quality assurance team",
  ]
  return (
    <div className="Experience">
      <h2>Experience</h2>
      <div>
        <div>
          <strong>Samsung Electronics,  South Korea – Software Engineer</strong><br />
          <span className="sml-txt">OCT 2014 – OCT 2015</span>
        </div>
        <ul>
          {e1.map((e, index) => {
            return (
              <li key={index}>{e}</li>
            )
          })}
        </ul>
      </div>
      <div>
        <div>
          <strong>Samsung Mobile, South Korea – Software Engineer</strong><br />
          <span className="sml-txt">JAN 2009 - OCT 2014</span>
        </div>
        <ul>
          {e2.map((e, index) => {
            return (
              <li key={index}>{e}</li>
            )
          })}
        </ul>
      </div>
      <div>
        <div>
          <strong>Samsung Mobile, South Korea – Quality Assurance Engineer</strong><br />
          <span className="sml-txt">JAN 2008 - DEC 2008</span>
        </div>
        <ul>
          {e3.map((e, index) => {
            return (
              <li key={index}>{e}</li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Experience 