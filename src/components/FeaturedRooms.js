import React, { Component } from 'react'
import {RoomContext} from "../context";
export default class FeaturedRooms extends Component {
    static contextType = RoomContext
    render() {
         
     const {FeaturedRooms:rooms}= this.context;
     console.log(rooms);
return <div>
    from featured rooms</div>;        
    }
}
 

