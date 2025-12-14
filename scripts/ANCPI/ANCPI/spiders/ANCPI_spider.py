import scrapy

class ANCPISpider(scrapy.Spider):
    name = "ANCPI"

    start_urls = [
        "https://www.ancpi.ro/statistica-februarie-2017/",
        "https://www.ancpi.ro/statistica-martie-2017/",
        "https://www.ancpi.ro/statistica-aprilie-2017/",
        "https://www.ancpi.ro/statistica-mai-2017/",
        "https://www.ancpi.ro/statistica-iunie-2017/",
        "https://www.ancpi.ro/statistica-iulie-2017/",
        "https://www.ancpi.ro/statistica-august-2017/",
        "https://www.ancpi.ro/statistica-septembrie-2017/",
        "https://www.ancpi.ro/statistica-octombrie-2017/",
        "https://www.ancpi.ro/statistica-noiembrie-2017/",
        "https://www.ancpi.ro/statistica-decembrie-2017/",
        "https://www.ancpi.ro/statistica-ianuarie-2018/",
        "https://www.ancpi.ro/statistica-februarie-2018/",
        "https://www.ancpi.ro/statistica-martie-2018/",
        "https://www.ancpi.ro/statistica-aprilie-2018/",
        "https://www.ancpi.ro/statistica-mai-2018/",
        "https://www.ancpi.ro/statistica-iunie-2018/",
        "https://www.ancpi.ro/statistica-iulie-2018/",
        "https://www.ancpi.ro/statistica-august-2018/",
        "https://www.ancpi.ro/statistica-septembrie-2018/",
        "https://www.ancpi.ro/statistica-octombrie-2018/",
        "https://www.ancpi.ro/statistica-noiembrie-2018/",
        "https://www.ancpi.ro/statistica-decembrie-2018/",
        "https://www.ancpi.ro/statistica-ianuarie-2019/",
        "https://www.ancpi.ro/statistica-februarie-2019/",
        "https://www.ancpi.ro/statistica-martie-2019/",
        "https://www.ancpi.ro/statistica-aprilie-2019/",
        "https://www.ancpi.ro/statistica-mai-2019/",
        "https://www.ancpi.ro/statistica-iunie-2019/",
        "https://www.ancpi.ro/statistica-iulie-2019/",
        "https://www.ancpi.ro/statistica-august-2019/",
        "https://www.ancpi.ro/statistica-septembrie-2019/",
        "https://www.ancpi.ro/statistica-octombrie-2019/",
        "https://www.ancpi.ro/statistica-noiembrie-2019/",
        "https://www.ancpi.ro/statistica-decembrie-2019/",
        "https://www.ancpi.ro/statistica-ianuarie-2020/",
        "https://www.ancpi.ro/statistica-februarie-2020/",
        "https://www.ancpi.ro/statistica-martie-2020/",
        "https://www.ancpi.ro/statistica-aprilie-2020/",
        "https://www.ancpi.ro/statistica-mai-2020/",
        "https://www.ancpi.ro/statistica-iunie-2020/",
        "https://www.ancpi.ro/statistica-iulie-2020/",
        "https://www.ancpi.ro/statistica-august-2020/",
        "https://www.ancpi.ro/statistica-septembrie-2020/",
        "https://www.ancpi.ro/statistica-octombrie-2020/",
        "https://www.ancpi.ro/statistica-noiembrie-2020/",
        "https://www.ancpi.ro/statistica-decembrie-2020/",
        "https://www.ancpi.ro/statistica-ianuarie-2021/",
        "https://www.ancpi.ro/statistica-februarie-2021/",
        "https://www.ancpi.ro/statistica-martie-2021/",
        "https://www.ancpi.ro/statistica-aprilie-2021/",
        "https://www.ancpi.ro/statistica-mai-2021/",
        "https://www.ancpi.ro/statistica-iunie-2021/",
        "https://www.ancpi.ro/statistica-iulie-2021/",
        "https://www.ancpi.ro/statistica-august-2021/",
        "https://www.ancpi.ro/statistica-septembrie-2021/",
        "https://www.ancpi.ro/statistica-octombrie-2021/",
        "https://www.ancpi.ro/statistica-noiembrie-2021/",
        "https://www.ancpi.ro/statistica-decembrie-2021/",
        "https://www.ancpi.ro/statistica-ianuarie-2022/",
        "https://www.ancpi.ro/statistica-februarie-2022/",
        "https://www.ancpi.ro/statistica-martie-2022/",
        "https://www.ancpi.ro/statistica-aprilie-2022/",
        "https://www.ancpi.ro/statistica-mai-2022/",
        "https://www.ancpi.ro/statistica-iunie-2022/",
        "https://www.ancpi.ro/statistica-iulie-2022/",
        "https://www.ancpi.ro/statistica-august-2022/",
        "https://www.ancpi.ro/statistica-septembrie-2022/",
        "https://www.ancpi.ro/statistica-octombrie-2022/",
        "https://www.ancpi.ro/statistica-noiembrie-2022/",
        "https://www.ancpi.ro/statistica-decembrie-2022/",
        "https://www.ancpi.ro/statistica-ianuarie-2023/",
        "https://www.ancpi.ro/statistica-februarie-2023/",
        "https://www.ancpi.ro/statistica-martie-2023/",
        "https://www.ancpi.ro/statistica-aprilie-2023/",
        "https://www.ancpi.ro/statistica-mai-2023/",
        "https://www.ancpi.ro/statistica-iunie-2023/",
        "https://www.ancpi.ro/statistica-iulie-2023/",
        "https://www.ancpi.ro/statistica-august-2023/",
        "https://www.ancpi.ro/statistica-septembrie-2023/",
        "https://www.ancpi.ro/statistica-octombrie-2023/",
        "https://www.ancpi.ro/statistica-noiembrie-2023/",
        "https://www.ancpi.ro/statistica-decembrie-2023/",
        "https://www.ancpi.ro/statistica-ianuarie-2024/",
        "https://www.ancpi.ro/statistica-februarie-2024/",
        "https://www.ancpi.ro/statistica-martie-2024/",
        "https://www.ancpi.ro/statistica-aprilie-2024/",
        "https://www.ancpi.ro/statistica-mai-2024/",
        "https://www.ancpi.ro/statistica-iunie-2024/",
        "https://www.ancpi.ro/statistica-iulie-2024/",
        "https://www.ancpi.ro/statistica-august-2024/",
        "https://www.ancpi.ro/statistica-septembrie-2024/",
        "https://www.ancpi.ro/statistica-octombrie-2024/",
        "https://www.ancpi.ro/statistica-noiembrie-2024/",
        "https://www.ancpi.ro/statistica-decembrie-2024/",
        "https://www.ancpi.ro/statistica-ianuarie-2025/",
        "https://www.ancpi.ro/statistica-februarie-2025/",
        "https://www.ancpi.ro/statistica-martie-2025/",
        "https://www.ancpi.ro/statistica-aprilie-2025/",
        "https://www.ancpi.ro/statistica-mai-2025/",
        "https://www.ancpi.ro/statistica-iunie-2025/",
        "https://www.ancpi.ro/statistica-iulie-2025/",
        "https://www.ancpi.ro/statistica-august-2025/",
        "https://www.ancpi.ro/statistica-septembrie-2025/",
        "https://www.ancpi.ro/statistica-octombrie-2025/",
        "https://www.ancpi.ro/statistica-noiembrie-2025/",
    ]

    def parse(self, response):

        link = response.xpath(
            "//a[contains(@class, 'attachment-link') and (contains(translate(@title, 'âăV', 'aav'), 'vanzari'))]/@href"
        ).get()

        link2 = response.xpath(
            "//a[contains(@class, 'attachment-link') and (contains(translate(@title, 'țT', 'tt'), 'tranzactii'))]/@href"
        ).get()

        if link:
            yield {
                "url": link
            }

        if link2:
            yield {
                "url": link2
            }