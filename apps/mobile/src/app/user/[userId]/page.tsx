'use client';

import { Spinner } from '@radix-ui/themes';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import Button from '@/shared/components/button/button';
import { useGetUserInfo } from '@/shared/apis/auth/queries';
import {
  useGetUserRegion,
  useGetUserSchool,
  useGetUserRank,
  useGetUserLang,
  useGetUserExp,
  useGetSuggestFriend,
  useGetUserPageUserInfo,
  useGetUserIntroduction,
} from '@/shared/apis/user/queries';
import { getAuthHeader } from '@/shared/utils/auth';
import {
  bottomDivHeadingStyle,
  bottomDivRefreshButtonStyle,
  bottomDivStyle,
  buttonDivStyle,
  containerStyle,
  divStyle,
  listStyle,
  middleContentDivStyle,
  middleDivStyle,
  sharedDivStyle,
  topDivStyle,
  topSectionStyle,
  spinnerTopDiveStyle,
} from './UserPage.css';
import CardInfo from './_components/cardInfo/cardInfo';
import CardProfile from './_components/cardProfile/cardProfile';
import Introduction from './_components/introduction/introduction';
import { getNextTier } from './_components/profile/_utils';
import Profile from './_components/profile/profile';
import ProgressBar from './_components/progressBar/progressBar';
import { useIntroduction } from './_hooks/useIntroduction';

const UserPage = () => {
  const username = useParams().userId as string;
  const router = useRouter();
  const queryClient = useQueryClient();

  const [자기소개수정중, set자기소개수정중] = useState(false);

  const isLoggedIn = !!getAuthHeader();

  const { data: authUserInfo } = useGetUserInfo();
  const { data: userInfo } = useGetUserPageUserInfo({ username });
  const { data: userRank } = useGetUserRank({ username });
  const { data: userSchool } = useGetUserSchool({ username });
  const { data: userRegion } = useGetUserRegion({ username });
  const { data: userLang } = useGetUserLang({ username });
  const { data: userExp } = useGetUserExp({ username });
  const { data: suggestedFriends } = useGetSuggestFriend(isLoggedIn);
  const { data: userIntroduction } = useGetUserIntroduction({ username });

  const {
    소개입력값,
    handle소개입력값변경,
    handle소개입력값초기화,
    소개변경함수,
  } = useIntroduction(userIntroduction);

  const handle자기소개수정 = () => {
    set자기소개수정중(true);
  };

  const handle자기소개수정완료 = () => {
    set자기소개수정중(false);
    소개변경함수();
  };

  const handle자기소개수정취소 = () => {
    set자기소개수정중(false);
    handle소개입력값초기화();
  };

  const isAuthUser = authUserInfo?.username === userInfo?.username;

  return (
    <div className={containerStyle}>
      <div className={divStyle}>
        <div className={topDivStyle}>
          <div className={sharedDivStyle}>
            <section className={topSectionStyle}>
              {userInfo ? (
                <>
                  <Profile
                    profileImg={userInfo?.profileImg ?? ''}
                    language={userLang?.langName ?? ''}
                    userName={username}
                    tier={userInfo?.grade}
                  />
                  <Introduction
                    isEdit={자기소개수정중}
                    username={username}
                    {...userIntroduction}
                    소개입력값={소개입력값}
                    on소개입력값변경={handle소개입력값변경}
                  />
                </>
              ) : (
                <div className={spinnerTopDiveStyle}>
                  <Spinner size="3" />
                </div>
              )}
            </section>

            {isAuthUser && (
              <div className={buttonDivStyle}>
                <Button
                  onClick={
                    자기소개수정중 ? handle자기소개수정완료 : handle자기소개수정
                  }
                  size="sm"
                  variant={자기소개수정중 ? 'primary' : 'secondary'}>
                  {자기소개수정중 ? '완료' : '수정'}
                </Button>

                <Button
                  onClick={
                    자기소개수정중
                      ? handle자기소개수정취소
                      : () => {
                          router.push(`/user/${username}/main-setting`);
                        }
                  }
                  size="sm"
                  variant="secondary">
                  {자기소개수정중 ? '취소' : '설정'}
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className={middleDivStyle}>
          <div className={sharedDivStyle}>
            <ProgressBar
              width={userExp?.percent ?? 0}
              currentTier={userInfo?.grade ?? 'YELLOW'}
              nextTier={
                userInfo?.grade ? getNextTier(userInfo?.grade) : 'YELLOW'
              }
            />

            <div className={middleContentDivStyle}>
              <CardInfo
                title="rank"
                content={`${userRank?.userRank ? `${userRank?.userRank} 등` : '준비 중'}`}
                subContent="유저간 순위"
              />
              <CardInfo
                title="school"
                content={`${userSchool?.schoolRankDto.schoolRank ? `${userSchool?.schoolRankDto.schoolRank} 등` : '준비 중'}`}
                subContent={userSchool?.schoolRankDto.schoolName}
              />
              <CardInfo
                title="region"
                content={`${userRegion?.regionRankDto?.regionRank ? `${userRegion?.regionRankDto?.regionRank} 등` : '준비 중'}`}
                subContent={userRegion?.regionRankDto?.regionName}
              />
              <CardInfo
                title="Language"
                content={`${
                  userLang?.langName
                    ? userLang.langName.charAt(0).toUpperCase() +
                      userLang.langName.slice(1)
                    : '준비 중'
                }`}
              />
            </div>
          </div>
        </div>

        <div className={bottomDivStyle}>
          <div className={sharedDivStyle}>
            <h3 className={bottomDivHeadingStyle}>추천친구</h3>

            <button
              onClick={() => {
                queryClient.invalidateQueries({
                  queryKey: ['user', 'suggestFriend'],
                });
              }}
              className={bottomDivRefreshButtonStyle}>
              새로고침
            </button>

            <ul className={listStyle}>
              {suggestedFriends?.map((data, index) => (
                <li key={`${data.username}-${index}`}>
                  <Link href={`/user/${data.username}`}>
                    <button>
                      <CardProfile {...data} />
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
