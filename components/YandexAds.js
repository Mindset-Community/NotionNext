import React, { useEffect } from 'react'

const YandexRTBAdvertisement = () => {
  useEffect(() => {
    // Function to render Yandex advertisement
    const renderYandexAd = () => {
      if (window.yaContextCb) {
        window.yaContextCb.push(() => {
          window.Ya.Context.AdvManager.render({
            blockId: 'R-A-7739238-1',
            renderTo: 'yandex_rtb_R-A-7739238-1'
          })
        })
      }
    }

    // Call the function to render the Yandex advertisement
    renderYandexAd()

    // Clean up function (optional)
    return () => {
      // Perform any cleanup here if needed
    }
  }, []) // Empty dependency array means this effect runs only once after initial render

  return <div id='yandex_rtb_R-A-7739238-1'>{/* This div will be used to render the Yandex advertisement */}</div>
}

export default YandexRTBAdvertisement
