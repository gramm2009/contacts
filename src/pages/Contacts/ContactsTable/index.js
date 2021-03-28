import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { CopyToClipboardText } from "../../../components/CopyToClipBoardText";

const useStyles = makeStyles({
  // не применяются
  table: {
    maxWidth: 1000,
  },
});

export const ContactsTable = ({ data }) => {
  const classes = useStyles();
  console.log(data[0].name.first);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="contacts table">
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell>Full name</TableCell>
            <TableCell>Birthday</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>location</TableCell>
            <TableCell>Nationality</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((el) => (
            <TableRow key={el.login.uuid}>
              <TableCell component="th" scope="row">
                <Avatar alt="" src={el.picture.thumbnail} />
              </TableCell>
              <TableCell>
                {el.name.title} {el.name.first} {el.name.last}
              </TableCell>
              <TableCell>
                <p>{format(parseISO(el.dob.date), "MM/dd/yyyy")}</p>
                <p>{el.dob.age} years</p>
              </TableCell>
              <TableCell>
                <CopyToClipboardText text={el.email} />
              </TableCell>
              <TableCell>
                <CopyToClipboardText text={el.phone} />
              </TableCell>
              <TableCell>
                <CopyToClipboardText
                  text={`${el.location.country}  ${el.location.city}  ${el.location.street.name}
               ${el.location.street.number}`}
                />
              </TableCell>
              <TableCell>7</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
