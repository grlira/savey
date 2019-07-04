import _ from 'lodash';
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const ENTRIES = [
  {
    date: '26/5',
    description: 'coffee',
    category: 'food',
    amount: '-101',
  },
  {
    date: '26/5',
    description: 'coffee',
    category: 'food',
    amount: '-101',
  },
  {
    date: '26/5',
    description: 'coffee',
    category: 'food',
    amount: '-101',
  },
  {
    date: '26/5',
    description: 'coffee',
    category: 'food',
    amount: '-101',
  },
  {
    date: '26/5',
    description: 'coffee',
    category: 'food',
    amount: '-101',
  },
  {
    date: '26/5',
    description: 'coffee',
    category: 'food',
    amount: '-101',
  },
];

export default () => (
  <>
    <List>
      {_.map(ENTRIES, ({ date, description, category, amount }) => (
        <ListItem>
          <ListItemText
            primary={description}
            secondary={
              <>
                {date}
                {category}
                {amount}
              </>
            }
          />
        </ListItem>
      ))}
    </List>
    <FormControl>
      <Grid container justify="space-around">
        <TextField id="description" label="description" />
        <TextField id="date" type="date" label="date" />
      </Grid>
    </FormControl>
  </>
);
