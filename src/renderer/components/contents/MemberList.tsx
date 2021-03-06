/// <reference path="../../../typings/tsd.d.ts" />

import * as React from "react";
import {Contact} from "../../models/Contact";

interface MemberListProps {
  members: Contact[];
}

export class MemberList extends React.Component<MemberListProps, {}> {
  public render(): JSX.Element {
    const users: JSX.Element[] = this.props.members.map(w => {
      return (
        <div className="item" key={w.accountId}>
          <img className="ui avatar image" src={w.avatarImageUrl} />
          <div className="content">
            <div className="ui sub header">{w.name}</div>
          </div>
        </div>
      );
    });
    return (
      <div className="content">
        <div className="ui middle aligned inverted list">
          {users}
        </div>
      </div>
    );
  }
}
