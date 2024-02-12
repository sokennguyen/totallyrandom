import { Button} from '@mui/material';



export type buttonType = {
  value: string,
  func: Function
}

export const BaseButton = ({ value,func }: buttonType) => {
  return (
    <>
      <Button style={{ backgroundColor: "#7E2553" }} sx={{ m: 1, textTransform: 'capitalize' }} variant='contained' onClick={func}> {value} </Button>
    </>
  )
}

