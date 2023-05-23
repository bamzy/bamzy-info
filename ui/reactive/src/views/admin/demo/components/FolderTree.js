import FolderTreeItem from "./FolderTreeItem";
import  "./FolderTree.css"
import { useState } from "react";
import {List} from '@chakra-ui/react'
export default function FolderTree ({data}) {

    const [expanded,setExpanded] = useState([]);
    const handleExpand = (ukey)=> {
        if( !expanded.includes(ukey) ) setExpanded([...expanded,ukey])
        else {
            const index = expanded.indexOf(ukey);
            // debugger;
            // debugger;
            let tmp = [...expanded];
            tmp.splice(index, 1);
            setExpanded(tmp);
        }

    }

    const build = (res, rootObj, marginLeft)=>{
        const {children,title,ukey} = rootObj;
        if(children && children.length>0){

            res.push(<FolderTreeItem ukey={ukey} key={ukey} title={title} marginLeft={marginLeft} isParent={true} handler={handleExpand}/>)
            children.map((item)=>{
                if(expanded.includes(ukey))
                    build(res,item,marginLeft+20)
            })


        }  else {
            res.push(<FolderTreeItem ukey={ukey} key={ukey} title={title} marginLeft={marginLeft} isParent={false}/>)
        }

        
    }

    let res = [];
    let key = 0;
    build(res,data, 10);
    return (
            <div style={{marginLeft: "50px"}}> 
            <List id="myUL">
                {res}
            </List>
            </div>
    )

}