import { useState } from "react";
import { Fragment } from "react";
import styled from "styled-components";
import "./ListGroup.css";

interface ListItemProps {
  active: boolean;
}

const List = styled.ul`
  list-style: none;
  padding: 0.5rem 1rem; /* Increased padding for a more spaced-out look */
  margin: 0 auto; /* Center the List horizontally */
  width: 80%; /* Adjust the width to a percentage of the parent container or screen */
  max-width: 800px; /* Optional: set a maximum width */
  font-family: "Poppins", sans-serif; /* Custom font */
  background: linear-gradient(
    135deg,
    #e0c3fc,
    #8ec5fc
  ); /* Gradient background */
  border-radius: 15px; /* Rounded corners for the list container */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); /* Soft shadow */
  padding: 20px; /* Add padding inside the list */
`;

const ListItem = styled.li<ListItemProps>`
  padding: 15px;
  margin: 10px 0;
  background: ${(props) =>
    props.active
      ? "linear-gradient(135deg, #6a11cb, #2575fc)"
      : "white"}; /* Set background based on active state */
  border-radius: 12px; /* Rounded corners */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); /* Soft shadow */
  color: #333; /* Text color */
  font-size: 1.2em;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease; /* Smooth transitions */

  &:hover {
    transform: scale(1.05); /* Slightly enlarge on hover */
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); /* Stronger shadow on hover */
  }

  &::before {
    content: "★"; /* Add a star before each item */
    margin-right: 10px;
    color: #9b59b6; /* Purple star */
    font-size: 1.5em;
  }

  &:first-child {
    border-top: 3px solid #9b59b6; /* Purple top border for first item */
  }

  &:last-child {
    border-bottom: 3px solid #9b59b6; /* Purple bottom border for last item */
  }

  &:not(:last-child) {
    border-bottom: 1px solid #ddd; /* Separator between items */
  }
`;

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void; // kinda like onclick
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <Fragment>
      <h1> {heading} </h1>
      {items.length === 0 && <p> No items found</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            key={item}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </Fragment>
  );
}

export default ListGroup;
