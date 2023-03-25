import {Text,Heading, Box, Flex,  Icon,SimpleGrid, useColorModeValue,} from "@chakra-ui/react";
// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import Card from "components/card/Card";
import React from "react";
import {ImCamera} from "react-icons/im";
import {MdFileCopy} from "react-icons/md";
import {BsFileEarmarkWordFill} from "react-icons/bs";
import CheckTable from "views/admin/default/components/CheckTable";
import WordFrequencyColumnChartCard from "views/admin/default/components/WordFrequencyColumnChartCard";
import TotalSpent from "views/admin/default/components/TotalSpent";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import "assets/css/TicTac.css";
import {
  columnsDataCheck,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import Constants from 'utils/constants';

export default function NewsDashboardReport() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const handler =  (event)=>{
      console.log(event.keyCode);

  }
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <Card my='10px'>
            <Flex>
                <Heading as='h4' size='lg' w='100%'>Iran News Monitor</Heading>

            </Flex>
            <Flex
                my='auto'
                h='100%'
                align={{ base: "center", xl: "start" }}
                justify={{ base: "center", xl: "center" }}
                my='10px'>
                <Heading as='h4' size='sm' w='100%'>
                    I don't think computers are capable of understanding politics, but this personal project of mine aims at confirming patterns that most observers of Iran events are already anticipating.<br/>
                </Heading>

            </Flex>
            <Flex my='auto' h='100%' my='10px'>
                <Text as='h5' size='xs'>
                    Below you can find charts about showing the live word frequency of the Iranian news articles according to most popular news sources.
                </Text>
                <input type='text' onKeyPress={(event)=>{handler(event)}} />

            </Flex>
        </Card>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3, "2xl": 3 }} gap='20px' mb='20px'>
            <MiniStatistics
              startContent={
                  <IconBox w='56px' h='56px' bg={boxBg}
                      icon={
                          <Icon w='32px' h='32px' as={MdFileCopy} color={brandColor} />
                      }
                  />
              } name='Monitored Sources' value='2935'
            />
            <MiniStatistics
                startContent={
                    <IconBox w='56px' h='56px' bg={boxBg}
                        icon={
                            <Icon w='32px' h='32px' as={BsFileEarmarkWordFill} color={brandColor} />
                        }
                    />
                } growth='+23%' name='Total Words Scanned' value='574k'
            />
            <MiniStatistics
                startContent={
                    <IconBox w='56px' h='56px' bg={boxBg}
                             icon={<Icon w='32px' h='32px' as={ImCamera} color={brandColor}/>}

                    />
                } name='Snapshots today' value='200'
            />
        </SimpleGrid>
        <SimpleGrid columns={1} spacing={20} mb='20px'>
            <WordFrequencyColumnChartCard url={`${Constants.rssAPIUrl}?name=analyzeBBC`} title='BBC Persian' altName='بی بی سی فارسی' size='15' />
            <WordFrequencyColumnChartCard url={`${Constants.telegramAPIUrl}/VahidOnline`} title='VahidOnline' altName='وحید آنلاین' size='15' />
            <WordFrequencyColumnChartCard url={`${Constants.telegramAPIUrl}/bidarzani`} title='Bidarzani' altName='بیدارزنی' size='15' />
            <WordFrequencyColumnChartCard url={`${Constants.telegramAPIUrl}/Fars_news1`} title='Fars News' altName='فارس نیوز' size='15' />
        </SimpleGrid>
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
            <TotalSpent />
            <WeeklyRevenue />
        </SimpleGrid>
        <SimpleGrid columns={2} gap='20px' mb='20px'>
          <Flex alignItem='center'>
            <MiniCalendar h='100%' minW='100%' selectRange={false} />
          </Flex>
            <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
        </SimpleGrid>

    </Box>
  );
}
