import styled from '@emotion/styled'


export const SidebarContainer = styled.div`
width: ${props => props.isSidebarOpen ? '100%' : '5%'};
max-width: 280px;
min-width: 80px;
background-image: linear-gradient(
    315deg,
    rgba(252,82,150,0.8) 0%,
    rgba(246,112,98,0.8) 74%),
    url(${props => props.backgroundImage});
)
backgorund-size: cover;
background-repeat: no-repeat;
background-position: center center;
position: relative;
transition: .2s ease-in all
`

export const SidebarHeader = styled.h4`
padding: 20px 10px;
text-align: center;
margin-bottom: 10px;
letter-spacing: 4px;
color: white;
font-family: ${props => props.font};
`
//menu items
export const MenuItemContainer = styled.div``
export const ItemContainer = styled.div``



export const MenuItem = styled.div`
${props => !props.isSidebarOpen ? `
text-align: center`: ``};
${props => !props.isSidebarOpen && `
${props.selected && 'background-color: rgba(0,0,0,0.4); transition: .3s ease-in all'}
`};
position: relative;     // por causa do dropdown icon
padding: 10px 30px;
font-weight: 600;
color: ${props => props.selected ? 'rgba(255,255,255)' : 'rgba(19, 15, 64)'};
font-family: ${props => props.font};
white-space: nowrap;
&: hover{
    color: rgba(255,255,255);
    transition: .1s erase-in all; 
}
&: after{
    content: '';
    border: thin solid ${props => props.selected ? 'rgba(255,255,255)' : 'rgba(225, 104, 85)'};
    display: block;
    margin: 8px 0 4px
}

${props => !props.selected && `
&:hover{
    &:after{
        border: 1px solid rgba(255, 255, 255, 0.2);
        transition: .1s erase-in all; 
    }
}
`}

`;

export const Text = styled.p`
display: ${props => props.isSidebarOpen ? 'inline' : 'none'}
`
export const Icon = styled.span`
${props => props.isSidebarOpen ? 'margin-right: 15px; transition: .2s ease-in all' : ''};
color: white;
`;

//sub-menu items

export const SubMenuItemContainer = styled.div`
font-size: 14px;
padding-top:18px;
${props => props.isSidebarOpen && `padding-left: 15%;`}
${props => !props.isSidebarOpen && `text-align: center;`}
`
export const SubMenuItem = styled.p`
color: rgba(19, 15, 64);
&: hover{
color: rgba(255,255,255);
}
`



//dropdown icon:--------------------------------------


export const DropdownIcon = styled.span`
position: absolute;
top: ${props => props.isOpen ? '16px' : '12px'};
border: solid ${props => props.selected ? 'rgba(255,255,255)' : 'rgba(19, 15, 64)'};
border-width: 0 1px 1px 0;
padding: 3px;
transform: ${props => props.isOpen ? 'rotate(-135deg); transition: .2s ease-in all' : 'rotate(45deg); transition: .2s ease-in all'};
right: 24px;

`;

////toggler:

export const TogglerContainer = styled.div`
position: absolute;
width: 30%;
bottom: 10%;
left: 0;
right: 0;
margin: 0 auto;
`
export const Toggler = styled.div`
margin-top: 40px;
height: 40px;
cursor: pointer;
position: relative;  

&:after {
    content: '';
    position: absolute;
    left: 0;
    top: .25em;
    width: 100%;
    height: .1em;
    background: #fff;
    box-shadow: 0 .75em 0 0 #fff, 0 1.5em 0 0 #fff;
    }
`
