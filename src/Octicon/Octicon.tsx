import {IconProps} from '@primer/octicons-react'
import React from 'react'
import styled from 'styled-components'
import sx, {SxProp} from '../sx'
import {ComponentProps} from '../utils/types'

type StyledOcticonProps = {icon: React.ElementType; color?: string} & IconProps

const Icon = React.forwardRef((props: StyledOcticonProps, ref: React.Ref<SVGSVGElement>) => {
  const {icon: IconComponent, ...rest} = props
  return <IconComponent {...rest} ref={ref} />
})

const Octicon = styled(Icon)<SxProp>`
  ${({color, sx: sxProp}) => sx({sx: {color, ...sxProp}})}
`

export type OcticonProps = ComponentProps<typeof Octicon>
export default Octicon
