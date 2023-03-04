import {Avatar, Box, Flex, FormLabel, Icon, Select, Center, SimpleGrid, useColorModeValue,} from "@chakra-ui/react";
// Assets
import Usa from "assets/img/dashboards/usa.png";
// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React from "react";
import {MdFileCopy} from "react-icons/md";
import {BsFileEarmarkWordFill} from "react-icons/bs";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import WordFrequencyBarChart from "views/admin/default/components/WordFrequencyBarChart";
import PieCard from "views/admin/default/components/PieCard";
import Tasks from "views/admin/default/components/Tasks";
import TotalSpent from "views/admin/default/components/TotalSpent";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, "2xl": 3 }} gap='20px' mb='20px'>
            <MiniStatistics
              startContent={
                  <IconBox
                      w='56px'
                      h='56px'
                      bg={boxBg}
                      icon={
                          <Icon w='32px' h='32px' as={MdFileCopy} color={brandColor} />
                      }
                  />
              }
              name='Monitor Sources'
              value='2935'
            />
            <MiniStatistics
                startContent={
                    <IconBox
                        w='56px'
                        h='56px'
                        bg={boxBg}
                        icon={
                            <Icon w='32px' h='32px' as={BsFileEarmarkWordFill} color={brandColor} />
                        }
                    />
                } growth='+23%' name='Total Words Scanned' value='574k'
            />
            <MiniStatistics endContent={
                <Flex me='-16px' mt='10px'>
                  <FormLabel htmlFor='balance'>
                    <Avatar src={Usa} />
                  </FormLabel>

                </Flex>
              }

              name='Total Snapshots'
              value='200'
            />
        </SimpleGrid>
        <SimpleGrid columns={1} spacing={20} mb='20px'>
            <WordFrequencyBarChart url={'https://bamzy.info/api/chart?name=analyzeTelegramChannel/VahidOnline'} title='VahidOnline' size='15' />
        </SimpleGrid>
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
            <TotalSpent />
            <WeeklyRevenue />
        </SimpleGrid>
        <SimpleGrid columns={2} gap='20px' mb='20px'>
          <Center>
            <MiniCalendar h='100%' minW='100%' selectRange={false} />
          </Center>
            <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
        </SimpleGrid>

    </Box>
  );
}
