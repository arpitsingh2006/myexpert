"use client";

import { useEffect, useState } from "react";

function Counter({ end, suffix = "" }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;

        const duration = 2000;
        const increment = end / (duration / 20);

        const timer = setInterval(() => {
            start += increment;

            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 20);

        return () => clearInterval(timer);
    }, [end]);

    return (
        <>
            {count}
            {suffix}
        </>
    );
}

export default function StatsCounterSection() {
    return (
        <section className="stats-counter-section py-xl-5 py-4">
            <div className="container py-xl-4 py-4">
                <div className="row g-4">

                    <div className="col-lg-3 col-6">
                        <div className="counter-card">
                            <h3>
                                <Counter end={12} suffix="+" />
                            </h3>
                            <span>Years Curating</span>
                        </div>
                    </div>

                    <div className="col-lg-3 col-6">
                        <div className="counter-card">
                            <h3>
                                <Counter end={84} suffix="k" />
                            </h3>
                            <span>Travellers Hosted</span>
                        </div>
                    </div>

                    <div className="col-lg-3 col-6">
                        <div className="counter-card">
                            <h3>
                                <Counter end={42} />
                            </h3>
                            <span>Countries</span>
                        </div>
                    </div>

                    <div className="col-lg-3 col-6">
                        <div className="counter-card">
                            <h3>
                                <Counter end={97} suffix="%" />
                            </h3>
                            <span>Return Rate</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}