
/*
React Todo List
The goal of this exercise is to create a working todo list with persistent data storage.

To start with, we have a styled todo list that supports adding todos.
 We also have premade styles for completed todo items. Although there’s no working mechanism for “completing” a todo.

Requirements
Clicking on a todo item should toggle the “checked” state.
The todo list state should be saved and loaded from local storage.
Checked items should sink to the bottom of the list automatically
Stretch Goals
Allow todos to be deleted. When you hover your mouse over a todo, an X should appear on the far right side, clicking the X should remove it from the list.
Add hidden timestamps to todos (created_at, completed_at), these will be used for sorting
The active todos should be sorted by created_at descending
The completed todos should be sorted by completed_at ascending
*/
import {
    Grid,GridItem,IconButton,Center,Flex
  } from "@chakra-ui/react";
import { useState } from "react";
import TodoItem from "./TodoItem";
import { AddIcon } from "@chakra-ui/icons/dist/chakra-ui-icons.cjs";
import { v4 as uuid } from 'uuid';
export default function TodoList() {
    const [items,setItems] = useState([{id:uuid(),title:"first title",body:"some random body",completed:false},{id:uuid(),title:"second title",body:"some random body",completed:true}]);


    const handleDelete = (id)=> {
        console.log("delete called with "+ id)
        console.log(items);
        let tmp = items.filter((item)=>{
            if(item.id!==id) return item;
        })
        console.log(tmp);
        setItems(tmp);
    }
    const setItem = (id,item) =>{
        let tmp = items.map((thisItem) =>{
            if(thisItem.id == id) {
                return item;
            } 
            return thisItem;
        })
        setItems(tmp);

    }
    function compare( a, b ) {
        if ( !a.completed && b.completed ){
          return -1;
        }
        if ( a.completed && !b.completed ){
          return 1;
        }
        return 0;
      }
    items.sort(compare)
    let size = items.length;
    const list = items.map((item,index)=>{
        return (
            <TodoItem item={item} handleDelete={handleDelete} setItem={setItem} index={index+1} key={index}/>
        );
    });
    const addItem = () => {
        setItems([...items,{id:uuid(),title:"new",body:"undefined",completed:false}])
    }
    return (
        <>
            <Grid templateColumns='repeat(1, 1fr)' gap={1} my={5}>
                <GridItem colSpan={1} h='10' bg='white' >
                    <Flex>

                        <Center w='100px' bg='white'>
                                <IconButton onClick={addItem}
                                    variant='outline'
                                    colorScheme='green.500'
                                    aria-label='Send email'
                                    icon={<AddIcon />}
                                    />
                        </Center>
                    </Flex>
                </GridItem>
                
            </Grid>            
            <Grid  templateRows={`repeat(${size}, 1fr)`} gap={4}>            
                {list}            
            </Grid>
        </>
    );

}