import { CheckCircle } from '@mui/icons-material';
import { Grid} from '@mui/material';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

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


export const CourseProgress = () => {
    const [lessons, setLessons] = useState(testLessons)
    return (
        <>
        {lessons.map((lesson)=> {
            return (
                <>
                <Grid ></Grid>
                {lesson.isComplete ?
                <NavLink to={lesson.lessonPath} style={{textDecoration:'none', color: 'black'}}>
                    <Grid container key={lesson.lessonName} style={{fontSize: 13, paddingBottom: 20, alignItems: 'center', justifyContent:'center'}}>
                        <Grid item xs={9}>
                            {lesson.lessonName} <span style={{color: "#e29578", fontWeight: 'bold'}}>{'<'}</span><span style={{color:'#006d77', fontWeight: 'bold', fontSize:12}}>{`${lesson.lessonTopic}`}</span><span style={{color: "#e29578",fontWeight: 'bold'}}>{'>'}</span>
                        </Grid>
                        <Grid item xs={1} /> 
                        <Grid item xs={2}>
                            <CheckCircle  style={{fontSize: 20, color:'#006d77'}}/>
                        </Grid>
                    </Grid>
                </NavLink> : (
                <Grid container key={lesson.lessonName} style={{fontSize: 13, paddingBottom: 20, alignItems: 'center', justifyContent:'center'}}>
                    <Grid item xs={9}>
                        {lesson.lessonName} <span style={{color: "#e29578", fontWeight: 'bold'}}>{'<'}</span><span style={{color:'#006d77', fontWeight: 'bold', fontSize:12}}>{`${lesson.lessonTopic}`}</span><span style={{color: "#e29578",fontWeight: 'bold'}}>{'>'}</span>
                    </Grid>
                    <Grid item xs={1} /> 
                    <Grid item xs={2}>
                        <CheckCircle  style={{fontSize: 20}}/>
                    </Grid>
                </Grid>)}
                <Grid item xs={11} style={{borderTop: 'dashed black 1px', marginBottom:20}}/>
                </>
            )    
        })}
        </>
    )  
}