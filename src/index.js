import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail"
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author ="Sam" timeAgo="today at 4:45PM" blog="Can't wait for lunch!" avatarSource="https://source.unsplash.com/random" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author ="Alex" timeAgo="today at 2:00PM" blog="That game was nuts last night" avatarSource="https://source.unsplash.com/random"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author ="Jane" timeAgo="today at 12:45PM" blog="Patrick Mahomes is amazing" avatarSource="https://source.unsplash.com/random"/>
            </ApprovalCard>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector("#root"))
