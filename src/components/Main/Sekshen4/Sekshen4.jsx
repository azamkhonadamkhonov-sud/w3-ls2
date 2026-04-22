import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  CloseButton,
  Dialog,
  Input,
  InputGroup,
  Portal,
  Text
} from "@chakra-ui/react"
import { LuUser } from 'react-icons/lu';

let url = "http://37.27.29.18:8001/api/categories"

export default function Sekshen4() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [nameE, setNameE] = useState("");
  const [idx, setIdx] = useState(null);
  const [open, setOpen] = useState(false);
  const [openE, setOpenE] = useState(false);
  const [search, setSearch] = useState("");

  async function getUser() {
    try {
      const res = await axios.get(url);
      setUsers(res.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function AddUser() {
    try {
      await axios.post(url, { name });
      getUser();
      setName("");
      setOpen(false);
    } catch (error) {
      console.error(error);
    }
  }
  async function editUser() {
    try {
      await axios.put(url, {
        id: idx,
        name: nameE
      });
      getUser();
      setNameE("");
      setOpenE(false);
    } catch (error) {
      console.error(error);
    }
  }

  async function delUser(id) {
    try {
      await axios.delete(`${url}?id=${id}`);
      getUser();
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
  }, [])

  return (
    <>
      <Box m="auto" className="w-[90%] flex items-center gap-6">
        <Button onClick={() => setOpen(true)}>
          Add User
        </Button>

        <Input
          width="50%"
          placeholder="Search users..."
          value={search}
          color={'black'}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>
      <Dialog.Root
        open={open}
        onOpenChange={(e) => setOpen(e.open)}
        placement="center"
      >
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Add User</Dialog.Title>
              </Dialog.Header>

              <Dialog.Body>
                <InputGroup startElement={<LuUser />}>
                  <Input
                    value={name}
                    color={"black"}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Username"
                  />
                </InputGroup>
              </Dialog.Body>

              <Dialog.Footer>
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={AddUser}>Save</Button>
              </Dialog.Footer>

              <Dialog.CloseTrigger asChild>
                <CloseButton />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
      <Box
        pt="6"
        pb="6"
        width="90%"
        m="auto"
        display="flex"
        flexWrap="wrap"
        gap="4"
      >
        {users
          .filter((el) =>
            el.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((el) => (
            <Box
              key={el.id}
              p="3"
              borderWidth="1px"
              width="200px"
            >
              <Text fontSize={20} mb={4}>
                {el.name}
              </Text>

              <Button
                size="sm"
                mr="2"
                onClick={() => {
                  setNameE(el.name);
                  setIdx(el.id);
                  setOpenE(true);
                }}
              >
                Edit
              </Button>

              <Button
                size="sm"
                colorScheme="red"
                onClick={() => delUser(el.id)}
              >
                Delete
              </Button>
            </Box>
          ))}
      </Box>
      <Dialog.Root
        open={openE}
        onOpenChange={(e) => setOpenE(e.open)}
        placement="center"
      >
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Edit User</Dialog.Title>
              </Dialog.Header>

              <Dialog.Body>
                <InputGroup startElement={<LuUser />}>
                  <Input
                  color={"black"}
                    value={nameE}
                    onChange={(e) => setNameE(e.target.value)}
                  />
                </InputGroup>
              </Dialog.Body>

              <Dialog.Footer>
                <Button
                  variant="outline"
                  onClick={() => setOpenE(false)}
                >
                  Cancel
                </Button>
                <Button onClick={editUser}>Save</Button>
              </Dialog.Footer>

              <Dialog.CloseTrigger asChild>
                <CloseButton />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </>
  )
}