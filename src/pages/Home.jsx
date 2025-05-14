import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Home = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        // Update date and time
        // const updateDateTime = () => {
        const now = new Date();
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        };
        document.getElementById('dateTime').textContent = now.toLocaleDateString('en-US', options);
        // };

        // updateDateTime();
        // const interval = setInterval(updateDateTime, 1000);

        // Create chart
        if (chartRef.current) {
            // Destroy existing chart if it exists
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }

            const ctx = chartRef.current.getContext('2d');
            chartInstance.current = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Projects', 'Students', 'Tasks', 'Finished Projects'],
                    datasets: [{
                        label: 'Count',
                        data: [5, 20, 10, 2],
                        backgroundColor: [
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(153, 102, 255, 0.6)'
                        ],
                        borderColor: [
                            'rgba(75, 192, 192, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(153, 102, 255, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Admin Dashboard Overview',
                            color: '#aaa',
                            font: {
                                size: 16
                            }
                        },
                        legend: {
                            labels: {
                                color: '#aaa'
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                color: '#aaa'
                            },
                            grid: {
                                color: 'rgba(71, 68, 68, 0.1)'
                            }
                        },
                        x: {
                            ticks: {
                                color: '#aaa'
                            },
                            grid: {
                                color: 'rgba(71, 68, 68, 0.1)'
                            }
                        }
                    }
                }
            });
        }

        return () => {
            // clearInterval(interval);
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return (
        <div className="p-6 bg-zinc-900">
            <div className="flex justify-between items-center w-full mb-8">
                <h2 className="text-2xl font-semibold text-blue-500">Welcome to the Task Management System</h2>
                <div className="text-sm text-gray-300" id="dateTime"></div>
            </div>

            <div className="grid grid-cols-4 gap-6 mb-10">
                <div className="bg-[#2a2a2a] p-6 rounded-md text-center shadow-md shadow-zinc-950">
                    <h2 className="text-white text-lg font-medium mb-2">Number of Projects</h2>
                    <p className="text-2xl text-white">5</p>
                </div>
                <div className="bg-[#2a2a2a] p-6 rounded-md text-center shadow-md shadow-zinc-950">
                    <h2 className="text-white text-lg font-medium mb-2">Number of Students</h2>
                    <p className="text-2xl text-white">20</p>
                </div>
                <div className="bg-[#2a2a2a] p-6 rounded-md text-center shadow-md shadow-zinc-950">
                    <h2 className="text-white text-lg font-medium mb-2">Number of Tasks</h2>
                    <p className="text-2xl text-white">10</p>
                </div>
                <div className="bg-[#2a2a2a] p-6 rounded-md text-center shadow-md shadow-zinc-950">
                    <h2 className="text-white text-lg font-medium mb-2">Number of Finished Projects</h2>
                    <p className="text-2xl text-white">2</p>
                </div>
            </div>

            <div className="w-full h-[400px]">
                <canvas ref={chartRef} height="400"></canvas>
            </div>
        </div>
    );
};

export default Home;
