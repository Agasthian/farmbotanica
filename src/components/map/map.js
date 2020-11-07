import React from "react"
import GoogleMapReact from "google-map-react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

const MapWrapper = styled.div`
  width: 100%;
  height: 55vh;
`

const Pin = styled.div`
  display: flex;
  align-items: center;
  width: 180px;
  color: var(--primary);
`
const PinText = styled.p`
  font-size: 1.3rem;
`

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 4rem;
`

const LocationPin = ({ text }) => (
  <Pin>
    <StyledIcon icon={faMapMarkerAlt} />
    <PinText>{text}</PinText>
  </Pin>
)

const Map = ({ location, zoomLevel }) => {
  return (
    <MapWrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCdpR9yMse3X3EjH_ibOtR-biwo9QgfMQc" }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </MapWrapper>
  )
}
export default Map
