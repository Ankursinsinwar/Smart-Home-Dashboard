// Import necessary libraries and Firebase modules
import React, { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc, onSnapshot } from "firebase/firestore";
import { db } from '../firebaseConfig';
import './DeviceToggle.css';

const DeviceToggle = () => {
    const [devices, setDevices] = useState({});

    // Function to fetch initial device data
    const fetchDeviceData = async () => {
        const deviceDocIds = ['home_theater', 'smart_lamp', 'smart_tv', 'wifi', 'work_pc'];
        const devicesData = {};

        try {
            for (let id of deviceDocIds) {
                const deviceRef = doc(db, "dashboard", id);
                const deviceSnapshot = await getDoc(deviceRef);
                if (deviceSnapshot.exists()) {
                    devicesData[id] = deviceSnapshot.data();
                }
            }
            setDevices(devicesData);
        } catch (error) {
            console.error("Error fetching device data:", error);
        }
    };

    // Real-time update listener for device status
    const listenForDeviceUpdates = () => {
        const deviceDocIds = ['home_theater', 'smart_lamp', 'smart_tv', 'wifi', 'work_pc'];
        
        deviceDocIds.forEach(id => {
            const deviceRef = doc(db, "dashboard", id);
            onSnapshot(deviceRef, (docSnapshot) => {
                if (docSnapshot.exists()) {
                    setDevices((prevDevices) => ({
                        ...prevDevices,
                        [id]: docSnapshot.data()
                    }));
                }
            });
        });
    };

    // Toggle device on/off with Firebase update
    const toggleDevice = async (deviceId) => {
        const deviceRef = doc(db, "dashboard", deviceId);
        const currentStatus = devices[deviceId]?.status;
        const newStatus = currentStatus === "on" ? "off" : "on";

        // Update device status in Firestore
        try {
            await updateDoc(deviceRef, { status: newStatus });
            console.log(`Device ${deviceId} updated to ${newStatus}`);
        } catch (error) {
            console.error("Error updating device status:", error);
        }
    };

    // useEffect to load device data on component mount
    useEffect(() => {
        fetchDeviceData();
        listenForDeviceUpdates();
    }, []);

    return (
        <div className="device-list">
            {Object.keys(devices).map((deviceId) => (
                <div key={deviceId} className="device">
                    <span>{devices[deviceId].name}</span>
                    <button
                        className={devices[deviceId].status === "on" ? "active" : ""}
                        onClick={() => toggleDevice(deviceId)}
                    >
                        {devices[deviceId].status === "on" ? "On" : "Off"}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default DeviceToggle;
