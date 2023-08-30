import React from 'react';
import {
  Avatar,
  Box,
  Collapse,
  IconButton,
  Link,
  Table,
  TableCell,
  TableRow,
  Typography,
  createStyles,
  makeStyles,
  withStyles,
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

interface Props {
  service: string;
  status?: string | any;
  updated: string;
  link: string;
  logo?: string;
  incidents?: boolean;
  isOpen?: boolean;
  onToggle?: () => void;
}

const useStyles = makeStyles({
  service: {
    fontWeight: 'bold',
    fontSize: '1.1rem',
  },
  product: {
    fontWeight: 'bold',
    fontSize: '0.9rem',
    marginLeft: '100px',
  },
  serviceIcon: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  emptyIcon: {
    margin: '0 10px 0 10px',
    padding: '12px',
    minWidth: '72px',
    minHeight: '72px',
  },
  icon: {
    width: '3rem',
    height: '3rem',
  },
  incident: {
    color: 'red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  noIncident: {
    color: 'green',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  incidentIcon: {
    fontSize: '2rem',
    fontWeight: 'bold',
  },
});

const StyledTableCell = withStyles(() =>
  createStyles({
    root: {
      padding: '15px 30px 15px 15px',
      fontSize: '1rem',
      width: '350px',
      borderBottom: '1.5px groove #F3F3F3',
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
  }),
)(TableCell);

const StyledTableCellExpanded = withStyles(() =>
  createStyles({
    root: {
      padding: '15px 30px 15px 15px',
      color: 'grey',
      width: '350px',
    },
  }),
)(TableCell);

const StyledSmallTableCell = withStyles(() =>
  createStyles({
    root: {
      padding: '15px',
      color: 'grey',
      width: '170px',
      borderBottom: '1.5px groove #F3F3F3',
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
  }),
)(TableCell);

const StyledSmallTableCellExpanded = withStyles(() =>
  createStyles({
    root: {
      padding: '15px',
      color: 'grey',
      width: '170px',
    },
  }),
)(TableCell);

export const StyledTableExpandedRow = (props: Props) => {
  const { service, status, updated, link, isOpen } = props;
  const classes = useStyles();

  return (
    <TableRow>
      <TableCell style={{ padding: 0 }} colSpan={4}>
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <Table>
            <StyledTableCellExpanded>
              <div className={classes.serviceIcon}>
                <Box className={classes.emptyIcon} />
                {service}
              </div>
            </StyledTableCellExpanded>
            <StyledTableCellExpanded>{status}</StyledTableCellExpanded>
            <StyledSmallTableCellExpanded>
              {updated}
            </StyledSmallTableCellExpanded>
            <StyledSmallTableCellExpanded>
              <Link href={link} target="_blank" style={{ marginLeft: '20%' }}>
                More...
              </Link>
            </StyledSmallTableCellExpanded>
          </Table>
        </Collapse>
      </TableCell>
    </TableRow>
  );
};

export const StyledTableRow = (props: Props) => {
  const { service, status, updated, link, logo, incidents, onToggle, isOpen } =
    props;
  const classes = useStyles();

  return (
    <>
      <TableRow>
        <StyledTableCell className={classes.service}>
          <div className={classes.serviceIcon}>
            <IconButton
              style={{ margin: '0 10px 0 10px' }}
              href={link}
              target="_blank"
            >
              <Avatar className={classes.icon} alt="logo" src={logo} />
            </IconButton>
            {service}
          </div>
        </StyledTableCell>
        <StyledTableCell>
          {incidents ? (
            <>
              {status ? (
                <Typography style={{ color: 'red' }}>{status}</Typography>
              ) : (
                <Typography style={{ color: 'red' }}>
                  Ongoing Incidents
                </Typography>
              )}
            </>
          ) : (
            <>{status ? status : <Typography>Normal Service</Typography>}</>
          )}
        </StyledTableCell>
        <StyledSmallTableCell>{updated}</StyledSmallTableCell>
        <StyledSmallTableCell>
          {incidents ? (
            <div className={classes.incident}>
              <ErrorOutlineIcon className={classes.incidentIcon} />
              <IconButton onClick={onToggle}>
                {isOpen ? (
                  <KeyboardArrowUpIcon className={classes.icon} />
                ) : (
                  <KeyboardArrowDownIcon className={classes.icon} />
                )}
              </IconButton>
            </div>
          ) : (
            <div className={classes.noIncident}>
              <CheckCircleOutlineIcon className={classes.incidentIcon} />
              <div style={{ width: '4.7rem' }} />
            </div>
          )}
        </StyledSmallTableCell>
      </TableRow>
    </>
  );
};
