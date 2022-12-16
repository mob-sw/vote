import React from 'react';
import PollTitleText from '../Component/PollTitleText';
import InputRadio from '../Component/InputRadio';
import PollList from '../Component/PollList';
import ActionButton from '../Component/ActionButton';
import { Divider } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import CheckCircle from '../Component/CheckCircle';
import DeadlineSetting from '../Component/DeadlineSetting';
import BasicDatePicker from '../Component/BasicDatePicker';

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
};

function MakePollScene() {
    return (
        <>
            <div class="container">
                <div class="itme"><CheckCircleOutlineIcon /></div>
                <div class="item"><h5>공지</h5></div>
            </div>
            <Divider />
            <PollTitleText />
            <Divider />
            <InputRadio />
            <PollList />
            <div class="container">
                <div class="item"><ActionButton /></div>
                <div class="item"><h5>항목 추가</h5></div>
            </div>
            <Divider light/>
            <div class="container">
                <DeadlineSetting />
                <div class="item"><h5>마감 시간 설정</h5></div>
                <CheckCircle />
            </div>
            <BasicDatePicker />
            <Divider light/>
            <div class="container">
                <div class="item"><DoneAllOutlinedIcon /></div>
                <div class="item"><h5>복수선택</h5></div>
                <CheckCircle />
            </div>
            <div class="container">
                <div class="item"><QuestionMarkIcon /></div>
                <div class="item">익명투표</div>
                <CheckCircle />
            </div>
            <div class="container">
                <div class="item"><PlaylistAddIcon /></div>
                <div class="item">선택항목 추가 허용</div>
                <CheckCircle />
            </div>
        </>
    );
}

export default MakePollScene;