import { useEffect, useRef, useState } from 'react'

import { Flex } from '@mantine/core'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  return (
    <>
      <Flex
        className="main-layout"
        ref={containerRef}
        style={{ height: '100vh' }}
      >
        {children}
      </Flex>
    </>
  )
}

export default MainLayout
