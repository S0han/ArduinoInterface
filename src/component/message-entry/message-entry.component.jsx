import React from 'react';
import MessageEntryButton from '../message-entry-button/message-entry-button.component';

import './message-entry.styles.css';

const MessageEntryInput = ({}) => (
    <div className='messageinput'>
        <MessageEntryButton />
        <input type='text' className='form-input' />
    </div>
); 

export default MessageEntryInput;