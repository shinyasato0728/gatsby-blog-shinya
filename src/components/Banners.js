import React from "react";

export const BannerAmazonProgram = () => {
  return (
    <div className="u-m-0a u-mb-64">
      <h4 className="u-w-100 u-ta-c u-mb-8">広告</h4>
      <div className="banner__wrapper">
        <a className="u-w-banner u-mb-16" href="https://www.amazon.co.jp/gp/video/storefront?benefitId=default&tag=shinshoi-22" target="_blank" rel="nofollow noopener noreferrer">
          <img src="/images/banner/banner_amazon_prime_video.jpg" alt="" />
        </a>
        <a className="u-w-banner u-mb-16" href="https://www.amazon.co.jp/gp/dmusic/promotions/AmazonMusicUnlimited/?tag=shinshoi-22" target="_blank" rel="nofollow noopener noreferrer">
          <img src="/images/banner/banner_amazon_music.jpg" alt="" />
        </a>
      </div>
    </div>
  )
}

export const BannerShizuokaIt = () => {
  return (
    <a className="u-m-0a u-mb-56" href="https://shizuoka-it.com/?link=itblog" target="_blank" rel="nofollow noopener noreferrer">
      <img src="/images/banner/shizuoka_it_banner.jpg" alt="" />
    </a>
  )
}
