import { useState } from "react";
import  "./FolderTree.css"
import { FaFolder,FaFile } from 'react-icons/fa';
import { ListItem ,ListIcon,Heading} from "@chakra-ui/react";
export default function FolderTreeItem ({marginLeft,title,isParent,ukey,handler}) {
    // console.log(ukey);
    let usedIcon = FaFile;
    let myhandler = null;
    let usedColor = 'blue.500';
    let usedClassName = '';
    if(isParent) {
        myhandler = ()=> {return handler(ukey)}
        usedIcon = FaFolder;
        usedColor = 'green.500'
        usedClassName = 'caret';
    }

    return (
        <ListItem key={ukey} size="lg" style={{marginLeft:marginLeft}} className={usedClassName} onClick={myhandler}>
            <Heading size="md" py={3}>

                <ListIcon as={usedIcon} color={usedColor} />
                {title}
            </Heading>
        </ListItem>
        )
}