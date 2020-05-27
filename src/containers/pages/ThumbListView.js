import React from "react";
import { Card, CustomInput, Badge } from "reactstrap";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import { ContextMenuTrigger } from "react-contextmenu";
import { Colxx } from "../../components/common/CustomBootstrap";

const ThumbListView = ({ user, isSelect, collect, onCheckItem }) => {
  return (
    <Colxx xxs="12" key={user.id} className="mb-3">
      <ContextMenuTrigger id="menu_id" data={user.id} collect={collect}>
        <Card
          onClick={event => onCheckItem(event, user.id)}
          className={classnames("d-flex flex-row", {
            active: isSelect
          })}
        >
          <NavLink to={`?p=${user.id}`} className="d-flex">
            <img
              alt={user.title}
              src={user.img}
              className="list-thumbnail responsive border-0 card-img-left"
            />
          </NavLink>
          <div className="pl-2 d-flex flex-grow-1 min-width-zero">
            <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
              <NavLink to={`?p=${user.id}`} className="w-40 w-sm-100">
                <p className="list-item-heading mb-1 truncate">
                  {user.title}
                </p>
              </NavLink>
              <p className="mb-1 text-muted text-small w-15 w-sm-100">
                {user.category}
              </p>
              <p className="mb-1 text-muted text-small w-15 w-sm-100">
                {user.date}
              </p>
              <div className="w-15 w-sm-100">
                <Badge color={user.statusColor} pill>
                  {user.status}
                </Badge>
              </div>
            </div>
            <div className="custom-control custom-checkbox pl-1 align-self-center pr-4">
              <CustomInput
                className="item-check mb-0"
                type="checkbox"
                id={`check_${user.id}`}
                checked={isSelect}
                onChange={()=>{}}
                label=""
              />
            </div>
          </div>
        </Card>
      </ContextMenuTrigger>
    </Colxx>
  );
};

/* React.memo detail : https://reactjs.org/docs/react-api.html#reactpurecomponent  */
export default React.memo(ThumbListView);
