import { Autocomplete, createStyles } from "@mantine/core"
import { useFocusWithin } from "@mantine/hooks"
import { useState } from "react"

const useStyles = createStyles((theme) => ({
  Autocomplete: {
    ".mantine-Autocomplete-filledVariant": {
      backgroundColor: theme.colorScheme === "dark" && theme.colors.dark[6],
    },
  },

  focused: {
    ".mantine-Autocomplete-filledVariant.mantine-Autocomplete-input": {
      border: "none",
    },
    ".mantine-Autocomplete-icon": {
      color: theme.colors.blue[5],
    },
  },

  open: {
    ".mantine-Autocomplete-input": {
      borderTopLeftRadius: theme.radius.lg,
      borderTopRightRadius: theme.radius.lg,
      borderBottomLeftRadius: theme.radius.sm,
      borderBottomRightRadius: theme.radius.sm,
    },
  },

  closed: {
    ".mantine-Autocomplete-input": {
      borderRadius: theme.radius.xl,
    },
  },
}))

const WidgetAutocomplete = (props) => {
  const { classes, cx } = useStyles()
  const { ref, focused } = useFocusWithin()
  const [isOpen, setIsOpen] = useState(false)
  const handleDropdownOpen = () => setIsOpen(true)
  const handleDropdownClose = () => setIsOpen(false)

  return (
    <Autocomplete
      {...props}
      ref={ref}
      className={cx(
        classes.Autocomplete,
        focused && classes.focused,
        isOpen ? classes.open : classes.closed
      )}
      onDropdownOpen={handleDropdownOpen}
      onDropdownClose={handleDropdownClose}
    />
  )
}

export default WidgetAutocomplete
