import React from 'react';
import PollTitleText from '../Component/PollTitleText';
import InputRadio from '../Component/InputRadio';
import PollList from '../Component/PollList';
import ActionButton from '../Component/ActionButton';
import { Divider } from '@mui/material';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import CheckButton from '../Component/CheckButton';
import DeadlineSetting from '../Component/DeadlineSetting';
import BasicDatePicker from '../Component/BasicDatePicker';
import SvgIcon from '@mui/material/SvgIcon';

function MakePollScene() {
    return (
        <>
            <div style={{ float: 'left' }}><CheckCircleOutlineIcon /></div>
            <div><h5>공지</h5></div>
            <Divider />
            <PollTitleText />
            <Divider />
            <InputRadio />
            <PollList />
            <div style={{ float: 'left' }}><ActionButton /></div>
            <h5>항목 추가</h5>
            <Divider light/>
            <div style={{ float: 'left' }}><DeadlineSetting /></div>
            <h5>마감 시간 설정</h5>
            <CheckButton />
            <div align="left"><BasicDatePicker /></div>
            <Divider light/>
            <div style={{ float: 'left' }}><DoneAllOutlinedIcon /></div>
            <h5>복수선택</h5>
            <CheckButton />
            <p></p>
            <div style={{ float: 'left' }}><SvgIcon component={QuestionMarkIcon} inheritViewBox /></div>
            <h5>익명투표</h5>
            <CheckButton />
            <p></p>
            <div style={{ float: 'left' }}><PlaylistAddIcon /></div>
            <h5>선택항목 추가 허용</h5>
            <CheckButton />
        </>
    );
}

export default MakePollScene;