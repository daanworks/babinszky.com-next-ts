const ConditionalLink = (props: any) => {
  if (props.asLink) {
    return (
      <a href={props.link} target='_blank' rel="noreferrer">
        <div className='h-100' style={{ cursor: 'pointer', color: 'black' }}>
          {props.children}
        </div>
      </a>
    )
  } else {
    return (
      <div className='h-100'>
        {props.children}
      </div>
    )
  }

}

export default ConditionalLink