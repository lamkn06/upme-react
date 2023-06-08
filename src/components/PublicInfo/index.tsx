import './backgroundEff.css';

import { Box, Flex, Image, Spinner, Text } from '@chakra-ui/react';
import { useEffect } from 'react';

import { ReactComponent as MailIcon } from '../../assets/icons/u_fast-mail.svg';
import { ReactComponent as HomeIcon } from '../../assets/icons/u_home-alt.svg';
import { ReactComponent as PhoneIcon } from '../../assets/icons/u_phone-alt.svg';
import emptyPicture from '../../assets/images/avatar-placeholder.svg';
import avatarBG from '../../assets/images/AvatarBG.png';
import avatarBorder from '../../assets/images/AvatarBorder.png';
import mainBG from '../../assets/images/pvPersonalInfoBG1.png';
import mainBGMobile from '../../assets/images/pvPersonalInfoBG2.png';
import { PublicProfile } from '../../models/PublicProfile';
import { removeListenerTransformBG, transformBG } from './backgroundEff';
import { Follower } from './Follower';

interface Props {
  loading: boolean;
  publicProfile: PublicProfile;
}

const PublicInfo = (props: Props) => {
  useEffect(function initialTransformBG() {
    transformBG();
    return () => {
      removeListenerTransformBG();
    };
  }, []);

  const publicProfile = props.publicProfile;

  return (
    <>
      <Flex
        alignItems={'center'}
        flexGrow={1}
        pos={'relative'}
        className={'container'}
        w={'100%'}
        overflowX={'hidden'}
        mt={'-24px'}
        minH={'calc(100vh - 64px)'}
      >
        <Box
          id={'main-content'}
          className={'mainContent'}
          minWidth={'300px'}
          top={{ base: '25px', sm: 'unset' }}
        >
          {props.loading ? (
            <Flex
              justifyContent={'center'}
              alignItems={'center'}
              flexDirection={'column'}
              flex={1}
            >
              <Spinner />
            </Flex>
          ) : (
            <Flex
              mt={'40px'}
              align={['flex-start', 'center']}
              justify={['flex-start', 'center']}
              direction={'column'}
            >
              <Flex
                flexWrap={{ base: 'wrap', sm: 'nowrap' }}
                direction={['row', 'column']}
                alignItems={'center'}
                w={'100%'}
              >
                <Box
                  pos={'relative'}
                  mr={['16px', 'unset']}
                  minWidth={['96px']}
                  _focus={{}}
                  cursor={'default'}
                >
                  <Image
                    borderRadius={'full'}
                    boxSize={['96px', '130px']}
                    mb={'16px'}
                    p={'5px'}
                    src={publicProfile?.profilePicture || emptyPicture}
                  />
                  <Image
                    pos={'absolute'}
                    boxSize={['96px', '130px']}
                    top={0}
                    src={avatarBorder}
                  />
                  <Image
                    pos={'absolute'}
                    boxSize={['96px', '130px']}
                    top={0}
                    src={avatarBG}
                  />
                </Box>
                <Follower publicProfile={publicProfile} />
              </Flex>
              <Flex
                mb={'40px'}
                width={'100%'}
                align={['flex-start', 'center']}
                justify={['flex-start', 'center']}
                direction={['column', 'row']}
                wrap={'wrap'}
                fontSize={'md'}
              >
                {publicProfile?.email && (
                  <Flex>
                    <Box
                      as={MailIcon}
                      display={'inline'}
                      mr={'7px'}
                      boxSize={'25px'}
                      fill={'primary'}
                    />
                    {publicProfile?.email}
                  </Flex>
                )}
                {publicProfile?.phoneNumber && (
                  <Flex ml={[0, '24px']}>
                    <Box
                      as={PhoneIcon}
                      display={'inline'}
                      mr={'10px'}
                      mb={'5px'}
                      boxSize={'21px'}
                      fill={'primary'}
                    />
                    {publicProfile?.phoneNumber}
                  </Flex>
                )}
                {publicProfile?.location && (
                  <Flex ml={[0, '24px']}>
                    <Box
                      as={HomeIcon}
                      display={'inline'}
                      mr={'10px'}
                      mb={'5px'}
                      boxSize={'21px'}
                      fill={'primary'}
                    />
                    {publicProfile?.location}
                  </Flex>
                )}
              </Flex>
              {publicProfile?.position && (
                <Text variant={'subtitle1'} mb={'8px'} fontWeight={'700'}>
                  {publicProfile?.position}
                </Text>
              )}
              {publicProfile?.personalStatement && (
                <Text
                  variant={'subtitle2'}
                  textAlign={['left', 'center']}
                  w={['80vw', '60vw']}
                  maxH={'192px'}
                  mb={'4px'}
                  lineHeight={'38px'}
                >
                  {publicProfile?.personalStatement}
                </Text>
              )}
            </Flex>
          )}
        </Box>

        <Box
          id={'main-content'}
          className={'mainContent'}
          minWidth={'300px'}
          top={{ base: '25px', sm: 'unset' }}
        ></Box>
        <Box display={'flex'} alignItems={'center'}>
          <Image className={'movingObject'} src={mainBG}></Image>
          <Image className={'movingObject'} src={mainBGMobile}></Image>
        </Box>
      </Flex>
    </>
  );
};

export default PublicInfo;
