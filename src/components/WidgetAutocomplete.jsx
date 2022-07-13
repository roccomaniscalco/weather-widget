import { Autocomplete, createStyles } from "@mantine/core"

const useStyles = createStyles((theme) => ({
  root: {
    "& [aria-expanded=true] .mantine-Autocomplete-input": {
      borderTopLeftRadius: theme.radius.lg,
      borderTopRightRadius: theme.radius.lg,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
  },

  wrapper: {
    "&:focus-within .mantine-Autocomplete-icon": {
      color: theme.colors.blue[5],
    },
  },

  input: {
    borderRadius: theme.radius.xl,
    "&::placeholder": {
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[3]
          : theme.colors.gray[6],
    },
  },

  filledVariant: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[1],
    "&:focus": {
      border: "none",
    },
  },
}))

const WidgetAutocomplete = (props) => {
  const { classes } = useStyles()
  return <Autocomplete classNames={classes} {...props} />
}

export default WidgetAutocomplete
