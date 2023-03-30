import { CheckCircle, LockRounded } from '@mui/icons-material';
import { Grid} from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router'


type LessonProgress = {
    lessonName: string;
    lessonTopic: string
    lessonPath: string;
    isComplete: boolean;
}

const testLessons : LessonProgress[] = [
    {
    lessonName: "Fuel Consumption",
    lessonTopic: "Two Sum",
    lessonPath: "/two-sum",
    isComplete: true
    },
    {
    lessonName: "Surface Mapping",
    lessonTopic: "Validate Subsequence",
    lessonPath: "/validate-subsequence",
    isComplete: true
    },
    {
    lessonName: "Mars Landing",
    lessonTopic: "Sorted Squared Array",
    lessonPath: "/sorted-squared-array",
    isComplete: false
    },
]

interface CourseProgressProps {
    refreshState: () => void;
}

export const CourseProgress = ({refreshState} : CourseProgressProps) => {
    const [lessons, setLessons] = useState(testLessons)

    return (
        <>
        {lessons.map((lesson, idx)=> {
            return (
                <React.Fragment key={idx}>
                <Grid ></Grid>
                {lesson.isComplete ?
                <Link to={lesson.lessonPath} onClick={refreshState} style={{textDecoration:'none', color: 'black'}}>
                    <Grid container style={{fontSize: 13, paddingBottom: 20, alignItems: 'center', justifyContent:'center'}}>
                        <Grid item xs={9}>
                            {lesson.lessonName} <span style={{color: "#e29578", fontWeight: 'bold'}}>{'<'}</span><span style={{color:'#006d77', fontWeight: 'bold', fontSize:12}}>{`${lesson.lessonTopic}`}</span><span style={{color: "#e29578",fontWeight: 'bold'}}>{'>'}</span>
                        </Grid>
                        <Grid item xs={1} /> 
                        <Grid item xs={2}>
                            <CheckCircle  style={{fontSize: 20, color:'#006d77'}}/>
                        </Grid>
                    </Grid>
                </Link> : (
                <Grid container style={{fontSize: 13, paddingBottom: 20, alignItems: 'center', justifyContent:'center'}}>
                    <Grid item xs={9}>
                        {lesson.lessonName} <span style={{color: "#e29578", fontWeight: 'bold'}}>{'<'}</span><span style={{color:'#006d77', fontWeight: 'bold', fontSize:12}}>{`${lesson.lessonTopic}`}</span><span style={{color: "#e29578",fontWeight: 'bold'}}>{'>'}</span>
                    </Grid>
                    <Grid item xs={1} /> 
                    <Grid item xs={2}>
                        <LockRounded  style={{fontSize: 20}}/>
                    </Grid>
                </Grid>)}
                <Grid item xs={11} style={{borderTop: 'dashed black 1px', marginBottom:20}}/>
                </React.Fragment>
            )    
        })}
        </>
    )  
}