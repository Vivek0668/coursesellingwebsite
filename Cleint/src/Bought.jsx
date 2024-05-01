import React, { useEffect, useState } from "react";
import { Card, Typography } from "@mui/material";
import Commonbar from "./Commonbar";
function Bought() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/users/purchasedCourses', {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('token')
            }
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Failed to fetch purchased courses');
            }
            return res.json();
        })
        .then(data => {
            if (data && data.purchasedCourses) {
                setCourses(data.purchasedCourses);
            } else {
                setCourses([]);
            }
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching purchased courses:', error);
            setError(error);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
        <Commonbar/>
        <div style={{ width: "100vw", height: "300vh", backgroundColor: "#eeeeee" }}>
            <Typography variant={"h6"}>Purchased Courses:</Typography>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {courses && courses.length > 0 ? (
                    courses.map(course => (
                        <div key={course._id}>
                            <Display
                                title={course.title}
                                description={course.description}
                                imageLink={course.imageLink}
                                price={course.price}
                            />
                        </div>
                    ))
                ) : (
                    <div>No purchased courses found.</div>
                )}
            </div>
        </div>
        </div>
    );
}

function Display(props) {
    return (
        <Card style={{ width: "90%", minWidth: 240, maxWidth: 500, borderRadius: 20 }}>
            <img src={props.imageLink} alt="course-img" style={{ width: "100%" }} />
            <div style={{ padding: 10 }}>
                <Typography variant="h5">{props.title}</Typography>
                <Typography variant="subtitle2" style={{ color: "grey" }}>Price</Typography>
                <Typography variant="subtitle1"><b>Rs {props.price}</b></Typography>
            </div>
        </Card>
    );
}

export default Bought;
