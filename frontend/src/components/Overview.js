import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import './Overview.css';

const Overview = () => {
    const [overviewData, setOverviewData] = useState({
        electricity: { consumption: 'Loading...', unit: '' },
        heating: { consumption: 'Loading...', unit: '' },
        water: { consumption: 'Loading...', unit: '' }
    });

    useEffect(() => {
        const fetchOverviewData = async () => {
            try {
                const overviewDocIds = ['electricity', 'heating', 'water'];
                const data = {};

                for (let id of overviewDocIds) {
                    const overviewDoc = doc(db, 'dashboard', id);
                    const overviewSnapshot = await getDoc(overviewDoc);
                    if (overviewSnapshot.exists()) {
                        const overviewItem = overviewSnapshot.data();
                        data[id] = {
                            consumption: overviewItem.consumption,
                            unit: overviewItem.unit // Fetching the specific unit for each item
                        };
                    }
                }
                setOverviewData(data);
            } catch (error) {
                console.error('Error fetching overview data:', error);
            }
        };

        fetchOverviewData();
    }, []);

    return (
        <section className="overview">
            <h2>Monthly Overview</h2>
            <div className="overview-cards">
                {Object.entries(overviewData).map(([id, { consumption, unit }]) => (
                    <div key={id} className="card">
                        <p>{id.charAt(0).toUpperCase() + id.slice(1)} Consumption</p>
                        <span className="value">{consumption} {unit}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Overview;
