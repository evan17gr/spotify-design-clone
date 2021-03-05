import React from 'react';
import
    {
        LeftSideDiv,
        FirstDiv,
        MoreOptions,
        SecondDiv,
        PlaylistsDiv,
        NewPlaylistDiv,
        PlaylistDiv,
        PlaylistHeader,
        PlaylistSongs,
        AddPlaylistDiv,
        NewPlaylistIcon,
        NewPlaylistParagraph,
    } from '../styled-components/LeftSideStyledComponents';
import IconAndParagraph from "./IconAndParagraph";

const LeftSide = () => {

    
    return (
        <LeftSideDiv>
            <FirstDiv>
                <MoreOptions href="#"></MoreOptions>
            </FirstDiv>
            <SecondDiv>
                <IconAndParagraph icon="fas fa-home" words="Home"/>
                <IconAndParagraph icon="fas fa-archive" words="Browse"/>
                <IconAndParagraph icon="fas fa-broadcast-tower" words="Radio"/>
            </SecondDiv>
            <PlaylistsDiv>
                <PlaylistDiv>
                    <PlaylistHeader>YOUR PLAYLISTS</PlaylistHeader>
                    <PlaylistSongs href="#">Albums</PlaylistSongs>
                    <PlaylistSongs href="#">Liked Songs fssssssssssssssssssssssss</PlaylistSongs>
                    <PlaylistSongs href="#">RaPlaylistSongs</PlaylistSongs>
                    <PlaylistSongs href="#">EDM</PlaylistSongs>
                    <PlaylistSongs href="#">The best of 2018</PlaylistSongs>
                    <PlaylistSongs href="#">Country Music</PlaylistSongs>
                </PlaylistDiv>
                <PlaylistDiv>
                    <PlaylistHeader>YOUR PLAYLISTS</PlaylistHeader>
                    <PlaylistSongs href="#">Albums</PlaylistSongs>
                    <PlaylistSongs href="#">Liked Songs</PlaylistSongs>
                    <PlaylistSongs href="#">RaPlaylistSongs</PlaylistSongs>
                    <PlaylistSongs href="#">EDM</PlaylistSongs>
                    <PlaylistSongs href="#">The best of 2018</PlaylistSongs>
                    <PlaylistSongs href="#">Country Music</PlaylistSongs>
                </PlaylistDiv>
                <PlaylistDiv>
                    <PlaylistHeader>YOUR PLAYLISTS</PlaylistHeader>
                    <PlaylistSongs href="#">Albums</PlaylistSongs>
                    <PlaylistSongs href="#">Liked Songs</PlaylistSongs>
                    <PlaylistSongs href="#">RaPlaylistSongs</PlaylistSongs>
                    <PlaylistSongs href="#">EDM</PlaylistSongs>
                    <PlaylistSongs href="#">The best of 2018</PlaylistSongs>
                    <PlaylistSongs href="#">Country Music</PlaylistSongs>
                </PlaylistDiv>
                <PlaylistDiv>
                    <PlaylistHeader>YOUR PLAYLISTS</PlaylistHeader>
                    <PlaylistSongs href="#">Albums</PlaylistSongs>
                    <PlaylistSongs href="#">Liked Songs</PlaylistSongs>
                    <PlaylistSongs href="#">RaPlaylistSongs</PlaylistSongs>
                    <PlaylistSongs href="#">EDM</PlaylistSongs>
                    <PlaylistSongs href="#">The best of 2018</PlaylistSongs>
                    <PlaylistSongs href="#">Country Music</PlaylistSongs>
                </PlaylistDiv>
            </PlaylistsDiv>
            <NewPlaylistDiv>
                <AddPlaylistDiv>
                        <NewPlaylistIcon href="#" className="fas fa-plus-circle"></NewPlaylistIcon>
                        <NewPlaylistParagraph>New Playlist</NewPlaylistParagraph>
                </AddPlaylistDiv>
            </NewPlaylistDiv>
        </LeftSideDiv>
    )
}

export default LeftSide;
